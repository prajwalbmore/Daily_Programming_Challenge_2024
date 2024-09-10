function findMissing(arr){
    const n = arr.length + 1;

    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        totalSum += i;    
    }

    let arraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];   
    }
    
    return totalSum - arraySum;
}

const arr = [1,2,4,5];
console.log('Missing Number from array is ',findMissing(arr));