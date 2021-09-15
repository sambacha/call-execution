// Copyright 2020 ConsenSys Software Inc
/// SPDX-License-Identifier: Apache-2.0


pragma solidity ^0.8.0;

import "./CallPathCallExecutionTree.sol";

contract CallExecutionTreeTest is CallPathCallExecutionTree {

    function extractTargetFromCallGraph1(bytes memory _callGraph, uint256[] memory _callPath) external pure
        returns (uint256 targetBlockchainId, address targetContract, bytes memory functionCall) {
        return extractTargetFromCallGraph(_callGraph, _callPath, true);
    }


}
