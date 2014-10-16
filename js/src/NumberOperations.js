/**
 * Calculate the max and min number, the average and the total given N numbers
 * @author silvia valencia
 */
var doOperationsVer1 = function (){
    var max = 0;
    var min = arguments[arguments.length - 1];
    var sum = 0;

    /**
     * Get the max number
     * @param  {Array} nums  The array of numbers
     * @param  {Int} index   The index of the array where to start comparison
     * @return {Int}         The max value
     */
    var getMax = function (nums, index) {
        if (nums[index] > max){
            max = nums[index];
        }
        if (index == 0) {
            return max;
        }
        return getMax(nums, index-1);
    };

    /**
     * Get the min number
     * @param  {Array} nums  The array of numbers
     * @param  {Int} index   The index of the array where to start comparison
     * @return {Int}         The min value
     */
    var getMin = function (nums, index) {
        if (nums[index] < min){
            min = nums[index];
        }
        if (index == 0) {
            return min;
        }
        return getMin(nums, index-1);
    };

    /**
     * Get the sum of numbers
     * @param  {Array} nums  The array of numbers
     * @param  {Int} index   The index of the array where to start the sum
     * @return {Int}         The sum value
     */
    var getSum = function (nums, index) {
        sum = sum + nums[index];
        if (index == 0) {
            return sum;
        }
        return getSum(nums, index-1);
    };

    //display parameters and result
    console.log ('Numbers are: ' + Array.prototype.slice.call(arguments).toString());
    console.log ('Max number is: ' + getMax(arguments, arguments.length - 1));
    console.log ('Min number is: ' + getMin(arguments, arguments.length - 1));
    console.log ('Sum is: ' + getSum(arguments, arguments.length - 1));
    console.log ('Average is: ' + sum/arguments.length);
}



/**
 * Calculate the max and min number, the average and the total given N numbers
 */
var doOperationsVer2 = function (){
    var max = 0;
    var min = arguments[arguments.length - 1];
    var sum = 0;

    //display parameters and result
    console.log (getMax(arguments, arguments.length - 1, max));
    console.log (getMin(arguments, arguments.length - 1, min));
    console.log (getSum(arguments, arguments.length - 1, sum));
    console.log (sum/arguments.length);
}

/**
 * Get the max number
 * @param  {Array} nums  The array of numbers
 * @param  {Int} index   The index of the array where to start comparison
 * @return {Int}         The max value
 */
var getMax = function (nums, index, max) {
    if (nums[index] > max){
        max = nums[index];
    }
    if (index == 0) {
        return max;
    }
    return getMax(nums, index-1, max);
}

/**
 * Get the min number
 * @param  {Array} nums  The array of numbers
 * @param  {Int} index   The index of the array where to start comparison
 * @return {Int}         The min value
 */
var getMin = function (nums, index, min) {
    if (nums[index] < min){
        min = nums[index];
    }
    if (index == 0) {
        return min;
    }
    return getMin(nums, index-1, min);
}

/**
 * Get the sum of numbers
 * @param  {Array} nums  The array of numbers
 * @param  {Int} index   The index of the array where to start the sum
 * @return {Int}         The sum value
 */
var getSum = function (nums, index, sum) {
    sum = sum + nums[index];
    if (index == 0) {
        return sum;
    }
    return getSum(nums, index-1, sum);
}