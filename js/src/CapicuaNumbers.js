/**
 * Get the first "capicua" number given a range of numbers
 * @param  {Int} start Ranege start number
 * @param  {Int} end   Ranege end number
 * @return 
 */
var getFirstCapicua = function (start, end) {
    //find the first capicua number in the specified range
    var foundCapicua = false;
    for (num = start; num < end; num++) {
        var numString = num.toString().split('');
        var numStringInverted = num.toString().split('').reverse();
        if (numString.join('') == numStringInverted.join('')) {
            foundCapicua = true;
            break;
        }
    }

    //display the parameters and result
    console.log('Range is: ' + start + ' - ' + end );
    if (foundCapicua)
        console.log('Fist capicua is: ' + num);
    else
        console.log('There is no capicua number in the range');
}