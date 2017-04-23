var canvas = document.getElementById('c');
var video = document.getElementById('v');
var img1 = document.getElementById('mask');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function onSuccess(mediaObj){
    window.stream = mediaObj;
    var video = document.querySelector("video");
    video.src = window.URL.createObjectURL(mediaObj);
    video.play();
    //video.srcObject = stream;
}
 
//Our error callback where we will handle any issues
function onError(errorObj){
    console.log("There was an error: " + errorObj);
}

var mediaConstraints = { video: true };

navigator.getUserMedia(mediaConstraints, onSuccess, onError)

// Download
function download() {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 640, 480);
    ctx.drawImage(img1, 0, 0, 640, 480);

    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
};
downloadLnk.addEventListener('click', download, false);