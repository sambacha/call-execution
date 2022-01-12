pragma solidity >=0.8;

 /// @title LockableStorageInterface
 
/**
 * @summary
 * Lockable storage interface defines the API between the function call layer and
 * the application layer to allow the function call layer to indicate to the application
 * layer that locked values should be committed or discarded.
 *
 */
 

 
interface LockableStorageInterface {
    /**
     * Called by the crosschain control contract when the call has been completed.
     *
     * @param _commit True if the provisional updates should be committed. False indicates the
     *         provisional updates should be discarded.
     * @param _crossRootTxId a value that indicates the transaction that has been completed.
     *        The value is the keccak256 message digest of the Root Blockchain Id and the
     *        Crosschain Transaction Id.
     */
    function finalise(bool _commit, bytes32 _crossRootTxId) external;
}
