function process(filename){
    console.log("processing :",filename)
}
function download(){
const promiseObj = new Promise(function(resolve,reject){
  // all process goes here
    setTimeout(function(){
        console.log("download");
        // api call was successful
            // resolve("all is well mp3");
        reject();
    },1000)
});
return promiseObj;
}

function successHandler(filename){
    process (filename);
}
function failHandler(filename){
    console.log("failed");
}
download().then(successHandler,failHandler);

