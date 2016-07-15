const audio = new AudioContext();
var buffer = audio.createBuffer(1, 22050, 44100);
var source = audio.createBufferSource();
var x = true;

socket.on("sample", function(data) {
    var arr = new Float32Array(Object.keys(data).length);
    for(var i in data) {
        arr[parseInt(i)] = data[i];
    }
    buffer.copyToChannel(arr, 0);
    if(x) {
        x = false;
        source.buffer = buffer;
    source.connect(audio.destination);
    source.start();
    }
});
