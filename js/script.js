var canvas = document.getElementById('canvas');
var video = document.getElementById('video');
var buttonnext = document.getElementById('btnext');
var buttonprevious = document.getElementById('btprevious');
var mask = document.getElementById('mask');
var defaultPeople = document.getElementById('default-people');
var msg = document.getElementById('msg');
var aMasks = ['mask1.png', 'mask2.png', 'mask3.png'];

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function onSuccess (mediaObj){
    msg.style.visibility = 'hidden';
    defaultPeople.style.visibility = 'hidden';
    window.stream = mediaObj;
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(mediaObj);
    video.play();
}

function onError (errorObj){
    console.log('There was an error: ' + errorObj);
}

var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
if (isIE) {
    msg.innerHTML = 'Internet Explorer / Edge browsers are not supported. Please use Chrome or Firefox.';
} else {
    navigator.getUserMedia({ video: true }, onSuccess, onError);
}

function download () {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 640, 480);
    ctx.drawImage(mask, 0, 0, 640, 480);

    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
}

downloadLnk.addEventListener('click', download, false);

function next () {
    var sCurrentMaskTemp = mask.src;
    var sCurrentMask = sCurrentMaskTemp.substring(sCurrentMaskTemp.lastIndexOf('/') + 1, sCurrentMaskTemp.length);
    var iCurrentMask = aMasks.indexOf(sCurrentMask);
    var iExpectedMask = iCurrentMask + 1;
    var iMasksLength = aMasks.length;

    if (iExpectedMask < iMasksLength) {
        mask.src = 'img/' + aMasks[iExpectedMask];
    }

    buttonAvailabilities(iExpectedMask);
}

function previous() {
    var sCurrentMaskTemp = mask.src;
    var sCurrentMask = sCurrentMaskTemp.substring(sCurrentMaskTemp.lastIndexOf('/') + 1, sCurrentMaskTemp.length);
    var iCurrentMask = aMasks.indexOf(sCurrentMask);
    var iExpectedMask = iCurrentMask - 1;

    if (iExpectedMask >= 0) {
        mask.src = 'img/' + aMasks[iExpectedMask];
    }

    buttonAvailabilities(iExpectedMask);
}

function buttonAvailabilities(i) {
    buttonprevious.style.visibility = i === 0 ? 'hidden' : 'visible';
    buttonnext.style.visibility = i === (aMasks.length - 1) ? 'hidden' : 'visible';
}
