// main.js

function sayHello(name) {
    document.write('Hello ' + name + '!');
    console.log('hello');
//	document.location.href='http://www.google.com'
}
//sayHello('World');

var age = '';
function calculateAge( bornyear) {
    age = 2014 - bornyear;
    return age;
}


var doOperationsVer1 = function (){
    var max = 0;
    var min = arguments[arguments.length - 1];
    var sum = 0;

    console.log (getMax(arguments, arguments.length - 1, max));
    console.log (getMin(arguments, arguments.length - 1, min));
    console.log (getSum(arguments, arguments.length - 1, sum));
    console.log (sum/arguments.length);
}

var getMax = function (nums, index, max) {
    if (nums[index] > max){
        max = nums[index];
    }
    if (index == 0) {
        return max;
    }
    return getMax(nums, index-1, max);
}
var getMin = function (nums, index, min) {
    if (nums[index] < min){
        min = nums[index];
    }
    if (index == 0) {
        return min;
    }
    return getMin(nums, index-1, min);
}

var getSum = function (nums, index, sum) {
    sum = sum + nums[index];
    if (index == 0) {
        return sum;
    }
    return getSum(nums, index-1, sum);
}

var doOperationsVer2 = function (){
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
        sum = sum + nums[index];
        if (index == 0) {
            return sum;
        }
        return getSum(nums, index-1);
    };

    console.log (getMax(arguments, arguments.length - 1));
    console.log (getMin(arguments, arguments.length - 1));
    console.log (getSum(arguments, arguments.length - 1));
    console.log (sum/arguments.length);
}


