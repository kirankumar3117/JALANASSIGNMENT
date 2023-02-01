// creating car service interface

class CarServices{
    constructor(modelType){
        let type=modelType;   
    this.getType=()=>{
      return type;
    }
    this.BS01=()=>{
        switch(type){
            case "Hatchback": return 2000;
            case "Sedan" : return 4000;
            case "SUV":return 5000;
        }
    }
    this.EF01=()=>{
        switch(type){
            case "Hatchback": return 5000;
            case "Sedan" : return 8000;
            case "SUV":return 10000;
        }
    }
    this.CF01=()=>{
        switch(type){
            case "Hatchback": return 2000;
            case "Sedan" : return 4000;
            case "SUV":return 6000;
        }
    }
    this.BF01=()=>{
        switch(type){
            case "Hatchback": return 1000;
            case "Sedan" : return 1500;
            case "SUV":return 2500;
        }
    }
    this.GF01=()=>{
        switch(type){
            case "Hatchback": return 1000;
            case "Sedan" : return 1500;
            case "SUV":return 2500;
        }
    }
    }

    
}

const carModels=["Hatchback","Sedan","SUV"];
console.log("Enter The Car Type : ");
for(let i=0;i<carModels.length;i++){
    console.log("Enter "+(i+1)+ " for "+carModels[i]);
}
const model=+prompt("Here :")



if(model==0 || model>3){
  alert("Wrong Details Found !");
  return;
}

const createModel=new CarServices(carModels[+model-1]);

const services=[
  {"service":"Basic Servicing",
    "serviceCode":"BS01"
  },
  {"service":"Engineering Fixing",
    "serviceCode":"EF01"
  },
  {"service":"Clutc Fixing",
    "serviceCode":"CF01"
  },
  {"service":"Brake Fixing",
    "serviceCode":"BF01"
  },
  {"service":"Gear Fixing",
    "serviceCode":"GF01"
  }];

console.log("hit `y` to acceprt the service and `n` to reject");

let arr=[];

for(var i=0;i<services.length;i++){
  let code = services[i].serviceCode;
  let price;
  if(code=="BS01") price=createModel.BS01();
  else if(code=="EF01") price=createModel.EF01();
  else if(code=="CF01") price=createModel.CF01();
  else if(code=="GF01") price=createModel.GF01();
  else if(code=="BF01") price=createModel.BF01();
  const servic=prompt(services[i].serviceCode +"  "+services[i].service +" for "+ carModels[model-1] +" "+ price +" INR :");
  if(servic=="y"){
    arr.push({key:services[i].serviceCode,value:i});
  }
}



const finalResult=(arr)=>{
  var sum=0;
  let narr=[];

  console.log("Final Details :");

  console.log("Type Of Car - "+carModels[model-1]);

  console.log("Service Codes - "+ arr.map((e)=>{
    return e.key;
  }));

  for(var j=0;j<arr.length;j++){
    if(arr[j].key=="BS01"){
      sum=sum+createModel.BS01();
     
      narr.push("Charged for "+services[arr[j].value].service +" - "+"₹"+createModel.BS01())
       
      
    }
    else if(arr[j].key=="EF01"){
      sum=sum+createModel.EF01();
      narr.push("Charged for "+services[arr[j].value].service +" - "+"₹"+createModel.EF01())
    }
    else if(arr[j].key=="CF01"){
      sum=sum+createModel.CF01();
      narr.push("Charged for "+services[arr[j].value].service +" - "+"₹"+createModel.CF01())
    }
    else if(arr[j].key=="BF01"){
      sum=sum+createModel.BF01();
      narr.push("Charged for "+services[arr[j].value].service +" - "+"₹"+createModel.BF01())
    }
    else if(arr[j].key=="GF01"){
      sum=sum+createModel.GF01();
      narr.push("Charged for "+services[arr[j].value].service +" - "+"₹"+createModel.GF01())
    }
    
  }

  
  for(items of narr){
      console.log(items);
  }
  console.log("Total Bill - ₹"+sum);
  if(sum>10000){
    console.log("Congractulation you get 10% discount on your next service.");
    console.log("use this code to claim the discount :  "+"MAX10"+Math.floor(Math.random()*7000000));
  }
}

finalResult(arr);



