document.body.onload = function() {
    var canvasH = document.createElement('canvas');
    var ctxHidden = canvasH.getContext('2d');
    var canvasShown = document.querySelector('canvas');
    canvasShown.width = 1150;
    canvasShown.height = 450;
    var ctxShown = canvasShown.getContext('2d');

    function init() {
        canvasH.width = 1150;
        canvasH.height = 400;
        ctxHidden.clearRect(0, 0, ctxHidden.width, ctxHidden.height);
        ctxHidden.textAlign = 'center';
        ctxHidden.textBaseLine = 'middle';
        ctxHidden.font = 'bold 70px VT323, Courier New';
        ctxHidden.fillStyle = '#EE4CB8';
        ctxHidden.fillText('HELLO LUZ', canvasH.width/2, canvasH.height/2);
        ctxHidden.fillText('WHAT ARE U DOING?', canvasH.width/2+150, canvasH.height/2+150);
        ctxShown.clearRect(0, 0, canvasShown.width, canvasShown.height);
        ctxShown.drawImage(canvasH, 0, 0);
        var i = 10; while(i--){ glitch();
        }
    }

    function glitch() {
        var width = 100 + Math.random()*100;
        var height = 50 + Math.random()*50;
        var x = Math.random()*canvasH.width;
        var y = Math.random()*canvasH.height;
        var dx = x + (Math.random() * 40 - 20);
        var dy = y + (Math.random() * 30 - 15);
        ctxShown.clearRect(x, y, width, height);
        ctxShown.fillStyle = '#4a6';
        ctxShown.drawImage(canvasH, x, y, width, height, dx, dy, width, height);
    }

    setInterval(function() {
        init();
    }, 1300/15);
};