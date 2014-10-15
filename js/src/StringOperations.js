var doOperationsStrings = function (){
    var max = 0;
    var min = arguments[arguments.length - 1];
    var sum = 0;

    var getMax = function (nums, index) {
        if (nums[index] > max){
            max = nums[index];
        }
        if (index == 0) {
            return max;
        }
        return getMax(nums, index-1);
    };

    var getMin = function (nums, index) {
        if (nums[index] < min){
            min = nums[index];
        }
        if (index == 0) {
            return min;
        }
        return getMin(nums, index-1);
    };

    var getSum = function (nums, index) {
        sum = sum + parseFloat(nums[index]);
        if (index == 0) {
            return sum;
        }
        return getSum(nums, index-1);
    };

    console.log ('Numbers are: ' + Array.prototype.slice.call(arguments).toString());
    console.log ('Max number is: ' + getMax(arguments, arguments.length - 1));
    console.log ('Min number is: ' + getMin(arguments, arguments.length - 1));
    console.log ('Sum is: ' + getSum(arguments, arguments.length - 1));
    console.log ('Average is: ' + sum/arguments.length);
}