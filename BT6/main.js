let numbers = [2,3,4,2,6,5,6,7,8];
let numcount = prompt("Nhập vào 1 số:");
let count = 0;
for(let i = 0;i<numbers.length;i++){
    if(numcount == numbers[i]){
        count++;
    }
}
console.log("Số "+numcount+" xuất hiện "+count+" lần trong dãy số");