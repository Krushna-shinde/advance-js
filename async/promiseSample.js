function sample(){
    return new Promise((resolve, reject)=>{
setTimeout(function(){
resolve("resolve successfully !!");
},1000)
})
}
sample().then((text)=>{
    console.log("data:"+text);
})