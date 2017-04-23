var canvas = document.getElementById('c');
var video = document.getElementById('v');
var img1 = document.getElementById('mask');

navigator.getUserMedia({video: true}, function(stream) {
    video.srcObject = stream;
    video.play();
}, function(err) {
    alert("Please reload the page, there was an error " + err);
});

function download() {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 640, 480);
    ctx.drawImage(img1, 0, 0, 640, 480);

    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
};
downloadLnk.addEventListener('click', download, false);