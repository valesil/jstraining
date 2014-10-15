var getFirstCapicua = function (start, end) {
    var foundCapicua = false;
    for (num = start; num < end; num++) {
        var numString = num.toString().split('');
        var numStringInverted = num.toString().split('').reverse();
        if (numString.join('') == numStringInverted.join('')) {
            foundCapicua = true;
            break;
        }
    }
    console.log('Range is: ' + start + ' - ' + end );
    if (foundCapicua)
        console.log('Fist capicua is: ' + num);
    else
        console.log('There is no capicua number in the range');
}