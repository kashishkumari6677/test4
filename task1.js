var companies = ["Bloomberg","Microsoft","Uber","Google","IMB","Netflix"]
console.log(companies)
companies.shift(1)
console.log(companies)
companies.splice(1,1,"ola")
console.log(companies) 
companies.push("amazon")
console.log(companies) 
var num=prompt("Enter your number")
if(num%5===0){
    console.log("multiple of 5 ")
}else{
    console.log(" not multiple of 5 ")
}
