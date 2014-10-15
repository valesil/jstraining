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
    console.log('The first ' + num + ' even numbers are: ' + evens.toString());
    console.log('The first ' + num + ' odd numbers are: ' + odds.toString());
}