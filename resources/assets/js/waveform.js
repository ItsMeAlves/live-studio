const board = document.querySelector("#drawBoard");
board.setAttribute("height", window.innerHeight);
board.setAttribute("width", window.innerWidth);
const boardContext = board.getContext("2d");

const WIDTH = board.offsetWidth;
const HEIGHT = board.offsetHeight;
drawWaveform();

socket.on("sample", function(content) {
    console.log("chegou");
    drawWaveform(content.bufferLength, content.data);
});

function drawWaveform(bufferLength, dataArray) {
        
    boardContext.fillStyle = 'rgb(200, 200, 200)';
    boardContext.fillRect(0, 0, WIDTH, HEIGHT);
    boardContext.lineWidth = 3;
    boardContext.strokeStyle = 'rgb(0, 0, 0)';

    boardContext.beginPath();
      
    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;
    for(var i = 0; i < bufferLength; i++) {
   
        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
            boardContext.moveTo(x, y);
        } 
        else {
            boardContext.lineTo(x, y);
        }

        x += sliceWidth;
    }

    boardContext.lineTo(board.width, board.height/2);
    boardContext.stroke();
};
