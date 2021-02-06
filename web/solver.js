var opened = new Array();

class node{
    row;
    colm;
    g;
    h; 
    parent;
    constructor(row,colm, g){
        this.row = row;
        this.colm = colm;
        this.h = Math.sqrt(Math.pow((this.row - end[0]),2) + Math.pow((this.colm - end[1]),2));
        if(g == 0)
            this.g = 0;
    }
    
    get_f(){
        return this.g + this.h
    }
    calculate_g(){
        this.g = this.parent.g + Math.sqrt(Math.pow((this.row - this.parent.row),2) + Math.pow((this.colm - this.parent.colm),2));
    }
    check_g(current){
        return current.g + Math.sqrt(Math.pow((this.row - current.row),2) + Math.pow((this.colm - current.colm),2));
    }
}


function Solve(){
    function find_min(){
        let min = opened[0];
        let min_index = 0;

        for(let i = 1; i < opened.length; i++){
            if(opened[i].get_f() < min.get_f()){
                min = opened[i];
                min_index = i;
            }

        }
        board[min.row][min.colm] = 404;
        opened.splice(min_index,1);
        return min
    }
    
    function neighbour(node, current){
        if(board[node.row][node.colm] == 1 || board[node.row][node.colm] == 404)
            return
        
        if(board[node.row][node.colm] != 200){
            node.parent = current;
            node.calculate_g();
            opened.push(node);
            board[node.row][node.colm] = 200;
        }
        else if(node.check_g(current) < node.h){
            node.parent = current;
            node.calculate_g();
        }
    }

    var current;
    opened.push(new node(start[0], start[1],0));
    while(true){
        current = find_min();
        if(current.row == end[0] && current.colm == end[1]){
            show_path(current);
            return
        }

        if(current.row + 1 < height)
            neighbour(new node(current.row + 1,current.colm), current);
        if(current.colm + 1 < width)
            neighbour(new node(current.row ,current.colm + 1), current);
        if(current.row - 1 > -1)
            neighbour(new node(current.row - 1,current.colm), current);
        if(current.colm - 1 > -1)
            neighbour(new node(current.row , current.colm - 1), current);
        // neighbour(new node(current.row + 1,current.colm +1), current);
        // neighbour(new node(current.row -1 ,current.colm + 1), current);
        // neighbour(new node(current.row - 1,current.colm -1), current);
        // neighbour(new node(current.row + 1,current.colm - 1), current);

    }
}

function show_path(node){
    while(node != null){
        let id = (node.row * width + node.colm).toString();
        document.getElementById(id).style.backgroundColor = '#ff9900';
        node = node.parent;
    }
}