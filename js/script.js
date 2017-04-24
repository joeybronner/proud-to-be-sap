var canvas = document.getElementById('c');
var video = document.getElementById('v');
var buttonnext = document.getElementById('btnext');
var buttonprevious = document.getElementById('btprevious');
var img1 = document.getElementById('mask');
var msg = document.getElementById('msg');
var aMasks = ['mask1.png', 'mask2.png'];

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function onSuccess (mediaObj){
    img1.style.visibility = 'visible';
    msg.style.visibility = 'hidden';
    window.stream = mediaObj;
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(mediaObj);
    video.play();
}

function onError (errorObj){
    console.log('There was an error: ' + errorObj);
}

navigator.getUserMedia({ video: true }, onSuccess, onError);

function download () {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 640, 480);
    ctx.drawImage(img1, 0, 0, 640, 480);

    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
}

downloadLnk.addEventListener('click', download, false);

function next () {
    var sCurrentMaskTemp = img1.src;
    var sCurrentMask = sCurrentMaskTemp.substring(sCurrentMaskTemp.lastIndexOf('/') + 1, sCurrentMaskTemp.length);
    var iCurrentMask = aMasks.indexOf(sCurrentMask);
    var iExpectedMask = iCurrentMask + 1;
    var iMasksLength = aMasks.length;

    if (iExpectedMask < iMasksLength) {
        img1.src = 'img/' + aMasks[iExpectedMask];
    }

    buttonAvailabilities(iExpectedMask);
}

function previous() {
    var sCurrentMaskTemp = img1.src;
    var sCurrentMask = sCurrentMaskTemp.substring(sCurrentMaskTemp.lastIndexOf('/') + 1, sCurrentMaskTemp.length);
    var iCurrentMask = aMasks.indexOf(sCurrentMask);
    var iExpectedMask = iCurrentMask - 1;

    if (iExpectedMask >= 0) {
        img1.src = 'img/' + aMasks[iExpectedMask];
    }

    buttonAvailabilities(iExpectedMask);
}

function buttonAvailabilities(i) {
    buttonprevious.style.visibility = i === 0 ? 'hidden' : 'visible';
    buttonnext.style.visibility = i === (aMasks.length - 1) ? 'hidden' : 'visible';
}
