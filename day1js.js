// var a = null


// const datas =  a??10

// console.log(datas);

// var a = [1,2,3,4]
// var b = [3,4,6,7]

// var datas = "this is my datas"

// var c = [...a,...b,"the","datas"]

// var d = [...datas]
// console.log(c);



const datas = (...a)=>{

 return  a.filter((e)=>e%2==0)

}
console.log(datas(76));





