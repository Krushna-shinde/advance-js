function process(file){
    console.log("process-"+file);
}
function download(callbackfn){
    setTimeout(function(){
        console.log("download");
        callbackfn("some songs!");
    },1000)
}
download(process);

