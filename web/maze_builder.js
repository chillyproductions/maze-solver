var height = Math.floor((screen.height * 0.6) / 25);
var width = Math.floor((screen.width * 0.6) / 25);

var board = [];
var stage = 1; 
var mouseDown = false;

var start = [];
var end = [];

function set_up(){

    s = "<table id='table' border='1'>";
    for(let row = 0; row < height; row++){
        s += "<tr>";
        board[row] = [];
        for(let colm = 0; colm < width; colm ++){
            var count = row * width + colm;
            s+= "<td id='"+ count.toString() +"'; onclick='Click(this.id)'; onmousedown='mouse_down(this.id)'; onmouseover='mouse_over(this.id)'; onmouseup='mouse_up()';></td>";
            board[row][colm] = 0;
        }
        s += "</tr>";
    }
    s += "</table>"

    document.getElementById("root_table").innerHTML = s;
}

function Click(id){
    var row = Math.floor(parseInt(id)/width);
    var colm = parseInt(id)%width;

    if(stage == 1){
        board[row][colm] = 2;
        document.getElementById(id).style.backgroundColor = 'green';
        document.getElementById("directions").innerHTML = "Add an End Point";
        start = [row, colm];
        stage++;
    }
    else if(stage == 2){
        board[row][colm] = 3;
        document.getElementById(id).style.backgroundColor = 'red';
        document.getElementById("directions").innerHTML = "Now Add Walls";
        end = [row,colm];
        stage++;
    }
}

function mouse_down(id){
    var row = Math.floor(parseInt(id)/width);
    var colm = parseInt(id)%width;

    if(stage >= 3){
        if(board[row][colm] == 0){
            board[row][colm] = 1;
            document.getElementById(id).style.backgroundColor = 'black';
        }
        else if(board[row][colm] == 1){
            board[row][colm] = 0;
            document.getElementById(id).style.backgroundColor = '';
        }
        mouseDown = true;
    }
}

function mouse_up(){
    mouseDown = false;
}

function mouse_over(id){
    var row = Math.floor(parseInt(id)/width);
    var colm = parseInt(id)%width;

    if(mouseDown == true){
        if(board[row][colm] == 0){
            board[row][colm] = 1;
            document.getElementById(id).style.backgroundColor = 'black';
        }
        else if(board[row][colm] == 1){
            board[row][colm] = 0;
            document.getElementById(id).style.backgroundColor = '';
        }
    }
}


set_up();
