function merge(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;

    for (let i = 0; i < m; i++) {
        if (arr1[i] > arr2[0]) {
            let temp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = temp;

            let first = arr2[0];
            let k;
            for (k = 1; k < n && arr2[k] < first; k++) {
                arr2[k - 1] = arr2[k];
            }
            arr2[k - 1] = first;
        }
    }
}


let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

merge(arr1, arr2);

console.log("arr1 ", arr1); 
console.log("arr2 ", arr2);