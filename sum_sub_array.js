function SumSubarrays(arr) {
    const result = [];
    const prefixSumMap = {};  
    let prefixSum = 0;

    prefixSumMap[0] = [-1];

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (prefixSum in prefixSumMap) {
            const startIndices = prefixSumMap[prefixSum];
            for (let j = 0; j < startIndices.length; j++) {
                result.push([startIndices[j] + 1, i]);
            }
        }
        if (!(prefixSum in prefixSumMap)) {
            prefixSumMap[prefixSum] = [];
        }
        prefixSumMap[prefixSum].push(i);
    }
    return result;
}

const arr = [1, 2, -3, 3, -1, 2];
console.log(SumSubarrays(arr));
