/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (maxReach < i) {
            return false; 
        }
        maxReach = Math.max(maxReach, i + nums[i]); // Update max reachable index
    }
    return true;
}

// Example usage:
console.log(canJump([2, 3, 1, 1, 4])); // Expected Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Expected Output: false

//Extra examples
console.log(canJump([2, 2, 0, 0, 1])); // Expected Output: false
console.log(canJump([1, 1, 1, 1, 1])); // Expected Output: true
console.log(canJump([0, 3, 1, 1, 4])); // Expected Output: false