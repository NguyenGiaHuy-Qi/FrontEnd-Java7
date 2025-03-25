let input = prompt("Nhập vào một dãy số:");
let arr = input.split("");
let max = arr[0];
if(isNaN(input)){
    console.log("Dãy số không hợp lệ");
}else{
    for(let i = 0;i < arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max+ " là số lớn nhất trong dãy");
}
