function intersectArrays(array1, array2){
    const res = array1.filter((item) => array2.includes(item));
    return res
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(intersectArrays(array1, array2)); 
