//Print 1-255


function print255 (){
    for(var i = 0; i <= 255; i++){
    console.log(i);
}
}
print255();

function printOdd255 (){
    for( var i = 1; i <= 255; i= i +2){
        console.log(i);
    }
}
printOdd255();

function printSum (){
    var sum = 0;
    for(var i = 1;i <= 255; i++){
        sum = sum + i ;
        console.log("Int",i,":","Sum",sum);
    }
}
printSum();

function newArray (arr){
    for(var i = 0; i < arr.length; i++){
        if (i < arr.length) {
            console.log(arr[i])
        }
    }
}
newArray([5,6,7,8,9,10,3,-3]);



function maxNum (arr){
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        if( max < arr[i]){
            max = arr[i];
        }
    }console.log(max);
}

maxNum([5,7,2,3,9,22,16,83,10]);

function avgNum (arr){
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        avg = arr[i] + avg
    }console.log(avg / arr.length);
}
avgNum([4,8,10,12,2,4,6,8]);

function arrOdd (){
    var arr = ([]);
    for(var i = 1; i <= 255; i = i + 2){
        arr.push(i);
    }console.log(arr);
}

arrOdd();



function arrSquare (arr){
    var sum = arr[0];
    for(var i = 0; i < arr.length; i++){
        sum = arr[i]
        console.log(sum*sum);
    }
}

arrSquare([5,5,5,5]);


function greatY (arr){
    var y = [3];
    for(var i = 0; i< arr.length; i++){
        if (arr[i] > y) {
            console.log(arr[i])
        }
    }
}

greatY([1,7,2,8,3,9,5,8,5,9,22,36]);



function minArray (arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }console.log(arr)
}
minArray([5,-6,-7,8,-9,10,3,-3]);



function maxMinavg (arr){
    var max = arr[0];
    var min = arr[0];
    var avg = sum / arr.length;
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
    if (arr[i] >= max) {
        max = arr[i];
    }if (arr[i] < min) {
        min = arr[i];
        sum = sum + arr[i]; 
    }
}
console.log(max,min,avg);
}

maxMinavg ([1,10,20,30,40,50]);
