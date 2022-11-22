let arr = [12, 43, 26, 74, 29, 41, 58, 91, 10];
let target = 43;

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return 'Dats found at ' +i;
        }
    }
    return 'Data not found'
}

console.log(linearSearch(arr, target));


/*=======================================================
                    1. Linear Search
=======================================================*/
/*
let arr = [12, 43, 26, 74, 29, 41, 58, 91, 10];
let target = 43;

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return 'Dats found at ' +i;
        }
    }
    return 'Data not found'
}

console.log(linearSearch(arr, target));
*/