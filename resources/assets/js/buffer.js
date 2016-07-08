var config = {
    audio: true,
    video: false
};

const audio = new AudioContext();

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;


function send(data) {
    socket.emit("sample", data);
}

function handle(stream) {
    const input = audio.createMediaStreamSource(stream);
    const processor = audio.createScriptProcessor(2048, 1, 1);
    processor.onaudioprocess = function(node) {
        send(node.inputBuffer);
    }

    input.connect(processor);
    // input.connect(audio.destination);
    processor.connect(audio.destination);
}

if(navigator.getUserMedia) {
    navigator.getUserMedia(config, handle, error => {
        console.log(error.name);
    });
}
else {
    console.log("I can't use that! :/")
}