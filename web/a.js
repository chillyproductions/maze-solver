class node{
    row;
    colm;
    g;
    h; 
    parent;
    constructor(row,colm){
        this.row = row;
        this.colm = colm;
    }
    get_f(){
        return this.g + this.h
    }
}

var list = [new node(2,2),new node(1,1),new node(3,3)];
var index = new node(1,2);
index.parent = "hi";
console.log(index.parent);

