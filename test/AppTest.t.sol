pragma solidity >=0.8.0;

/**
 * @summary 
 *    Contract to allow testing of the message dispatcher
 * 
 */
 
 /// @title AppTest
contract AppTest {
    uint256 public val;

  
    event Dump(uint256 _val);

    function aFunc(uint256 _val) external {
        val = _val;
        // @emit Dump
        emit Dump(_val);
    }
}
