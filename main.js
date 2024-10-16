let str = '1,2,3,4,10,20,30'
const sumOfStr =(s)=>{
    let arr = str.split(',');
    let sum =0;
    for(let i=0;i<arr.length;i++){
        arr[i] = parseInt(arr[i]);
        sum=sum+arr[i]
    }
    return sum
}
console.log(sumOfStr(str))
