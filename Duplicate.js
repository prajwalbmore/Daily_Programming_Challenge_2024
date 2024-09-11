function findDuplicate(arr) {
    let p1 = arr[0];  //First pointer
    let p2 = arr[0];  //Second pointer
    
    do {
        p1 = arr[p1];
        p2 = arr[arr[p2]];
    } while (p1 !== p2);
    
    p1 = arr[0];
    
    while (p1 !== p2) {
        p1 = arr[p1];
        p2 = arr[p2];
    }
    
    return p1;
}

const arr = [3, 1, 3, 4, 2];
console.log("Duplicate Number is " , findDuplicate(arr)); 
