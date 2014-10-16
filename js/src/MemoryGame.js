/**
 * Memory game
 * @author silvia valencia
 */
var game = function () {
    var matrix = [];
    var displayMatrix = [];
    var size = 0;
    
    /**
     * Get the size of the matrix
     * @return {Int} the size of the matrix
     */
    var getSize = function (){
        do{
            size = parseInt(prompt ('Introduce the matrix size'));
        }while (size % 2 > 0);
        return size;
    }

    /**
     * Create a matrix and fill randomly with letters
     */
    var createMatrix = function (){
        //create the matrix empty
        for (i = 0; i < size; i++){
            matrix[i]=[];
        }

        //populate values randomly
        var x = 0;
        var y = 0;
        for (i = 0; i < size*size/2; i++){
            j = 0;
            do {    //to fill twice
                x = parseInt(Math.random() * size);
                y = parseInt(Math.random() * size);
                if (matrix[x][y] == undefined) {
                    matrix[x][y] = String.fromCharCode(i + 65);
                    j++;
                };
            } while (j < 2)
        }
    }

    /**
     * Create a matrix used to display and fill with X
     */
    var createDisplayMatrix = function (){
        for (i = 0; i < size; i++){
            displayMatrix[i]=[];
            for (j = 0; j < size; j++){
                displayMatrix[i][j] = 'X';
            }
        }
    }

    /**
     * Print the matrix in the console
     * @param  {array} matrix The matrix wil be displayed
     */
    var showMatrix = function (matrix){
        //dispaly the matrix indexes
        var indexes = ' ';
        for (i = 0; i < size; i++) {
            indexes = indexes + ' ' + i;
        };
        console.log(indexes);

        //display the marix values
        for (i = 0; i < size; i++){
            console.log(i + ' ' + matrix[i].toString());
        }
    }

    /**
     * Interact with the user to get the guests while displaying the matrix
     * @return {[type]} [description]
     */
    var play = function (){
        do{
            //get the first guest coordinates
            var firstGuest = prompt('Introduce the first guest in the following format "row,col"');
            var firstRow = parseInt(firstGuest.substring(0,1));
            var firstCol = parseInt(firstGuest.substring(2,3));
            displayMatrix[firstRow][firstCol] = matrix[firstRow][firstCol];
            console.log('First guest:');
            showMatrix(displayMatrix);

            //get the second guest coordinates
            var secondGuest = prompt('Introduce the second guest in the following format "row,col"');
            var secondRow = parseInt(secondGuest.substring(0,1));
            var secondCol = parseInt(secondGuest.substring(2,3));
            displayMatrix[secondRow][secondCol] = matrix[secondRow][secondCol];
            console.log('Second guest:');
            showMatrix(displayMatrix);

            //hide the values if the pair was not guessed
            if (matrix[firstRow][firstCol] != matrix[secondRow][secondCol]){
                displayMatrix[firstRow][firstCol] = 'X';
                displayMatrix[secondRow][secondCol] = 'X';
                console.log('You did not guess the pair :(');
            }
            else{
                console.log('You guessed the pair :)');
            }
            showMatrix(displayMatrix);
        }while (matrix.toString() != displayMatrix.toString())

        //finis the game
        console.log('You have finished the game!!');
        alert('You have finished the game!!');
    }

    //function calls
    getSize();
    createMatrix();
    createDisplayMatrix();
    console.log('The matrix with values is:');
    showMatrix(matrix);
    console.log('The matrix for the game is:');
    showMatrix(displayMatrix);
    play();
}

