// SPDX-License-Identifier: Apache-2.0
// Copyright 2019 ConsenSys Software Inc

pragma solidity >=0.8;

import "./CrosschainVerifier.sol";
import "./AttestorSignRegistrar.sol";
import "./BytesUtil.sol";

contract CrosschainVerifierSign is CrosschainVerifier, BytesUtil {
    AttestorSignRegistrar registrar;

    constructor(address _registrar) {
        registrar = AttestorSignRegistrar(_registrar);
    }

    uint256 constant LEN_OF_LEN = 4;
    uint256 constant LEN_OF_SIG = 20 + 32 + 32 + 1;

    function decodeAndVerifyEvent(
        uint256 _blockchainId,
        bytes32, /* _eventSig */
        bytes calldata _encodedEvent,
        bytes calldata _signature
    ) external view override {
        address[] memory signers;
        bytes32[] memory sigRs;
        bytes32[] memory sigSs;
        uint8[] memory sigVs;

        {
            uint32 len = BytesUtil.bytesToUint32(_signature, 0);
            require(
                _signature.length == LEN_OF_LEN + len * LEN_OF_SIG,
                "Signature incorrect length"
            );

            signers = new address[](len);
            sigRs = new bytes32[](len);
            sigSs = new bytes32[](len);
            sigVs = new uint8[](len);

            uint256 offset = LEN_OF_LEN;
            for (uint256 i = 0; i < len; i++) {
                signers[i] = BytesUtil.bytesToAddress2(_signature, offset);
                offset += 20;
                sigRs[i] = BytesUtil.bytesToBytes32(_signature, offset);
                offset += 32;
                sigSs[i] = BytesUtil.bytesToBytes32(_signature, offset);
                offset += 32;
                sigVs[i] = BytesUtil.bytesToUint8(_signature, offset);
                offset += 1;
            }
        }
        registrar.verifyAndCheckThreshold(
            _blockchainId,
            signers,
            sigRs,
            sigSs,
            sigVs,
            _encodedEvent
        );
    }
}
