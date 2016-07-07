var config = {
    audio: true,
    video: false
};

const audio = new AudioContext();

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

function handle(stream) {
    const input = audio.createMediaStreamSource(stream);
    const analyser = audio.createAnalyser();

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);

    analyser.getByteTimeDomainData(dataArray);
    function feed() {
        seed = requestAnimationFrame(feed);
        socket.emit("sample", {
            bufferLength: bufferLength,
            data: dataArray
        });
    }

    feed();

    input.connect(audio.destination);
}

if(navigator.getUserMedia) {
    navigator.getUserMedia(config, handle, error => {
        console.log(error.name);
    });
}
else {
    console.log("I can't use that! :/")
}