function removeDuplicatesAndSort(arr) {
    let Arr2 = [...new Set(arr)];
    Arr2.sort((a, b) => a - b);
    return Arr2;
}
let input = [2, 3, 4, 5, 4, 4, 5, 67, 4, 8];
console.log(removeDuplicatesAndSort(input));