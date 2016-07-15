var config = {
    audio: true,
    video: false
};
//08007220151
const audio = new AudioContext();

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;


function handle(stream) {
    const input = audio.createMediaStreamSource(stream);
    const processor = audio.createScriptProcessor(512, 1, 1);
    const analyser = audio.createAnalyser();

    processor.onaudioprocess = function(node) {
        socket.emit("sample", node.inputBuffer.getChannelData(0));
    }

    input.connect(processor);
    processor.connect(analyser);
}

if(navigator.getUserMedia) {
    navigator.getUserMedia(config, handle, error => {
        console.log(error.name);
    });
}
else {
    console.log("I can't use that! :/")
}