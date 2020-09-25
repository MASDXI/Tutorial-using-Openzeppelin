//"SPDX-License-Identifier: UNLICENSED" 
pragma solidity ^0.6.0;

/**
 * @author
 * @title
 */

contract Counter {
    uint256 private value;

    /**
     * @dev function increse value
     */
    function increase() public {
      value++;
    }

    /**
     * @dev function retreive value
     */
    function retrieve() public view returns(uint256) {
      return value;
    }

    /**
     * @dev function set value
     * @param _value input set value type 256 bit unsigned-integers
     */
    function setValue(uint256 _value) public {
      value = _value;
    }
}
