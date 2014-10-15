/**
 * Created by jalatraining on 10/10/2014.
 */

var game = function () {
    var matrix = [];
    var displayMatrix = [];
    var size = 0;
    var getSize = function (){
        do{
            size = parseInt(prompt ("Introduce the matrix size"));
        }while (size % 2 > 0);
        return size;
    }

    var createMatrix = function (){
    for (i = 0; i < 3; i++){
    matriz[i]=new Array(3);
    }


        for (i = 0; i < size/2; i++){     //to fill all the array
            j = 0;
            while (j < 2){    //to fill twice
                var pos = parseInt(Math.random() * size);
                while (matrix[pos] == undefined)  //to fill in an empty cell
                {
                    matrix[pos] = String.fromCharCode(i + 65);
                    pos = parseInt(Math.random() * size);
                    j++;
                };
            }
        }
    }

    var createDisplayMatrix = function (){
        for (i = 0; i < size; i++){
            displayMatrix[i] = 'X';
        }
    }

    var showMatrix = function (matrix){
        //to dispaly the indexes
        var indexes = '';
        for (i = 1; i <= size; i++) {
            indexes = indexes + ' ' + i.toString();
        };
        console.log(indexes);

        var values = '';
        for (i = 0; i < size; i++) {
            values = values + ' ' + matrix[i];
        };
        console.log(values);
    }

    var play = function (){
        do{
            var firstPos = parseInt(prompt("Introduce the first guest"));
            var secondPos = parseInt(prompt("Introduce the second guest"));

            if (matrix[firstPos] == matrix[secondPos]){
                displayMatrix[firstPos] = matrix[firstPos];
                displayMatrix[secondPos] = matrix[secondPos];
                showMatrix(displayMatrix);
            }
        } while (displayMatrix.indexOf('X') >= 0)
    }

    getSize();
    createMatrix();
    showMatrix(matrix);

}

