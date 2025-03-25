let numbers = [2,5,7,4,1,8,6];
let random = parseInt(prompt("Nhập vào 1 số:"));
let found = false;
for(let i = 0;i<numbers.length;i++){
    if(random == numbers[i]){
        console.log("Bingo");
        found = true;
        break;
    }
}
if(found == false){
    console.log("Chúc bạn may mắn lần sau");
}