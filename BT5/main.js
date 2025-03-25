let arr =[1,2,3,4,5];
let tongsochan = 0;
let tongsole = 0;
for(let i = 0;i<arr.length;i++){
    if(arr[i]%2==0){
        tongsochan += arr[i];
    }else{
        tongsole += arr[i];
    }
}
console.log("Tổng số chẵn là: "+tongsochan);
console.log("Tổng số lẻ là: "+tongsole);
