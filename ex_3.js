let nums=[1,2,3,4,5]
let count=0;
for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        console.log('${++count}==> ${nums[i]}-->${nums[j]}');
    }
}