//time complexity: O(n*2^n);
//space complexity : O(n^2);
const size=prompt("enter the array size");
let arr=[];
let i=0;
while(i<size){
  //taking input
  const num=prompt("enter "+(+i+1)+" element : ");
  if(num!=0){
    arr.push(+num); 
    i++
  } 
}
var flag=false;

function findSumArray(arr,sub=[]){
  if(flag==true || arr.length==0) return ;
  for(var i=0;i<arr.length;i++){
    var arr1=sub.concat(arr[i]);
    
    const sum=arr1.reduce((e,d)=> e+d,0);
    
    if(sum==0){
      console.log(arr1);
      
      flag=true;
     
       return ;
    }
    findSumArray(arr.slice(i+1),sub.concat(arr[i]))
  }
  
    
}

findSumArray(arr);

if(!flag){console.log("No Elements found")}