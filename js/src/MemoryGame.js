/**
 * Created by jalatraining on 10/10/2014.
 */

var game = function () {
    var matrix = [];
    var displayMatrix = [];
    var size = 0;
    
    var getSize = function (){
        do{
            size = parseInt(prompt ('Introduce the matrix size'));
        }while (size % 2 > 0);
        return size;
    }

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

    var createDisplayMatrix = function (){
        for (i = 0; i < size; i++){
            displayMatrix[i]=[];
            for (j = 0; j < size; j++){
                displayMatrix[i][j] = 'X';
            }
        }
    }

    var showMatrix = function (matrix){
        //to dispaly the indexes
        var indexes = ' ';
        for (i = 0; i < size; i++) {
            indexes = indexes + ' ' + i;
        };
        console.log(indexes);

        for (i = 0; i < size; i++){
            console.log(i + ' ' + matrix[i].toString());
        }
    }

    var play = function (){
        do{
            var firstGuest = prompt('Introduce the first guest in the following format "row,col"');
            var firstRow = parseInt(firstGuest.substring(0,1));
            var firstCol = parseInt(firstGuest.substring(2,3));
            displayMatrix[firstRow][firstCol] = matrix[firstRow][firstCol];
            showMatrix(displayMatrix);

            var secondGuest = prompt('Introduce the second guest in the following format "row,col"');
            var secondRow = parseInt(secondGuest.substring(0,1));
            var secondCol = parseInt(secondGuest.substring(2,3));
            displayMatrix[secondRow][secondCol] = matrix[secondRow][secondCol];
            showMatrix(displayMatrix);


            if (matrix[firstRow][firstCol] != matrix[secondRow][secondCol]){
                displayMatrix[firstRow][firstCol] = 'X';
                displayMatrix[secondRow][secondCol] = 'X';
                console.log('You did not guess the pair');
                //showMatrix(displayMatrix);
            }
            else{
                console.log('You guessed the pair');
            }
            showMatrix(displayMatrix);
        //} while (displayMatrix.indexOf('X') >= 0)
        }while (matrix.toString() != displayMatrix.toString())
        alert('You have finished the game!!');
    }

    getSize();
    createMatrix();
    createDisplayMatrix();
    console.log('The matrix with values is:')
    showMatrix(matrix);
    console.log('The matrix for the game is:')
    showMatrix(displayMatrix);
    play();
}

