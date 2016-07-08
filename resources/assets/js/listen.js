const audio = new AudioContext();
var source = audio.createBufferSource();

socket.on("sample", function(data) {
    console.log(data);
    source.buffer = data;
    source.connect(audio.destination);
    source.start();
});

