/**
 * Get the first N odd/even numbers
 * @author silvia valencia
 */
var getFirstEvenOddNumbers = function (num){
    var evens = [];
    var odds = [];
    for (i = 1; i <= num*2; i++){
        if (i%2 == 0){
            evens.push(i);
        }
        else{
            odds.push(i);
        }
    }

    //display the even and odd numbers
    console.log('The first ' + num + ' even numbers are: ' + evens.toString());
    console.log('The first ' + num + ' odd numbers are: ' + odds.toString());
}