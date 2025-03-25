let input = prompt("Nhập vào 1 dãy số:");
if(isNaN(input)){
    console.log("dãy số không hợp lệ");
}else{
    let reverse = input.split("").reverse().join("");
    console.log(reverse);
}
