let arr = [2, 3, 4, 5, 4, 4, 5, 67, 4, 8];
let countn = {};
for (let num of arr) {
    if (countn[num]) {
        countn[num]++;
    } else {
        countn[num] = 1;
    }
}
let maxCount = 0;
let minElement = Infinity;
for (let num in countn) {
    let freq = countn[num];
    if (freq > maxCount) {
        maxCount = freq;
        minElement = Number(num);
    }
    else if (freq === maxCount && Number(num) < minElement) {
        minElement = Number(num);
    }
}
console.log(`Phần tử xuất hiện nhiều nhất: ${minElement}`);
