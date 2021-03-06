// Copyright 2020 ConsenSys Software Inc
/// SPDX-License-Identifier: Apache-2.0

pragma solidity >=0.8.0;

/// @title CallPathCallExecutionTree

import "./BytesUtil.sol";

contract CallPathCallExecutionTree is BytesUtil {
    uint256 private constant NUM_FUNCS_CALLED_SIZE = 1;
    uint256 private constant OFFSET_SIZE = 4;
    uint256 private constant BLOCKCHAIN_ID_SIZE = 32;
    uint256 private constant ADDRESS_SIZE = 20;
    uint256 private constant DATA_LEN_SIZE_SIZE = 2;

    function extractTargetFromCallGraph(
        bytes memory _callGraph,
        uint256[] memory _callPath,
        bool getFunction
    )
        internal
        pure
        returns (
            uint256 targetBlockchainId,
            address targetContract,
            bytes memory functionCall
        )
    {
        uint256 index = 0;

        // Go down the call path to the target function
        for (uint256 i = 0; i < _callPath.length; i++) {
            uint256 offset = 0;
            uint8 numFuncsCalled = BytesUtil.bytesToUint8(_callGraph, index);
            if (numFuncsCalled == 0) {
                require(
                    i == _callPath.length - 1,
                    "Reached leaf function but there is more call path."
                );
            } else {
                // Jump to the location of the offset of the function
                uint256 functionCalled = _callPath[i];
                offset = BytesUtil.bytesToUint32(
                    _callGraph,
                    index + functionCalled * OFFSET_SIZE + NUM_FUNCS_CALLED_SIZE
                );
            }
            // Jump to the function
            index = index + offset;
        }

        // Jump over the leaf function indicator / numFuncsCalled = 0 indicator
        if (_callPath[_callPath.length - 1] != 0) {
            uint8 numFuncsCalled = BytesUtil.bytesToUint8(_callGraph, index);
            require(numFuncsCalled == 0, "Expected leaf function.");
            index += NUM_FUNCS_CALLED_SIZE;
        }

        targetBlockchainId = BytesUtil.bytesToUint256(_callGraph, index);
        index += BLOCKCHAIN_ID_SIZE;
        targetContract = BytesUtil.bytesToAddress2(_callGraph, index);
        if (getFunction) {
            index += ADDRESS_SIZE;
            uint16 functionDataLen = BytesUtil.bytesToUint16(_callGraph, index);
            index += DATA_LEN_SIZE_SIZE;
            functionCall = BytesUtil.sliceAsm(
                _callGraph,
                index,
                functionDataLen
            );
        } else {
            functionCall = "";
        }
    }

    function determineParentCallPath(uint256[] memory _callPath)
        internal
        pure
        returns (uint256[] memory)
    {
        uint256[] memory callPathOfParent;
        uint256 callPathLen = _callPath.length;

        // Don't call from root function
        assert(!(callPathLen == 1 && _callPath[0] == 0));

        if (_callPath[callPathLen - 1] != 0) {
            callPathOfParent = new uint256[](callPathLen);
            for (uint256 i = 0; i < callPathLen - 1; i++) {
                callPathOfParent[i] = _callPath[i];
            }
            callPathOfParent[callPathLen - 1] = 0;
        } else {
            callPathOfParent = new uint256[](callPathLen - 1);
            for (uint256 i = 0; i < callPathLen - 2; i++) {
                callPathOfParent[i] = _callPath[i];
            }
            callPathOfParent[callPathLen - 2] = 0;
        }
        return callPathOfParent;
    }
}
