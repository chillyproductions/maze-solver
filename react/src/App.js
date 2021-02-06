import React from 'react';
import './App.css';
import './style.css'

function State(props){
}

class Mytable extends React.Component{
  constructor(props){
    super(props);
    let tmp = [];
    for(let row = 0; row < props.size; row++){
        tmp[row] = [];
        for(let colm = 0; colm < props.size; colm++){
            tmp[row][colm] = 0;
        }
    }
    this.state = {
      tbl : tmp,
      stage: 1,
      size: props.size,
      mouseDown: false
    };
  }

  
  Click(id){
    let row = Math.floor(parseInt(id)/this.state.size);
    let colm = parseInt(id)%this.state.size;
  
    if(this.state.stage == 1){
        let board = this.state.tbl.slice();
        board[row][colm] = 2;
        this.setState({tbl : board, start : [row, colm], stage: this.state.stage + 1});
    }
    else if(this.state.stage == 2){
        let board = this.state.tbl.slice();
        board[row][colm] = 3;
        this.setState({tbl : board, end: [row,colm], stage : this.state.stage+1});
    }
  }
  
  mouse_down(id){
    let row = Math.floor(parseInt(id)/this.state.size);
    let colm = parseInt(id)%this.state.size;

    if(this.state.stage >= 3){
        if(this.state.tbl[row][colm] == 0){
            let board = this.state.tbl.slice();  
            board[row][colm] = 1;
            this.setState({tbl : board});
        }
        else if(this.state.tbl[row][colm] == 1){
            let board = this.state.tbl.slice();
            board[row][colm] = 0;
            this.setState({tbl : board});
        }
        this.setState({mouseDown : true});
    }
  }

  mouse_up(){
    this.setState({mouseDown : false});
  }

  mouse_over(id){
  let row = Math.floor(parseInt(id)/this.state.size);
  let colm = parseInt(id)%this.state.size;

    if(this.state.mouseDown == true){
        if(this.state.tbl[row][colm] == 0){
            let board = this.state.tbl.slice();  
            board[row][colm] = 1;
            this.setState({tbl : board});
        }
        else if(this.state.tblboard[row][colm] == 1){
            let board = this.state.tbl.slice();  
            board[row][colm] = 0;
            this.setState({tbl : board});
        }
    }
  }

  render(){
    return(
        <div>
          <table border="1">
              {this.state.tbl.map((row, irow)=>(
                  <tr>
                      {row.map((node, icolm) => {
                          let id = irow*row.length + icolm;
                          return(
                          <td onMouseOver = {()=>{this.mouse_over(id)}} onMouseUp={()=>{this.mouse_down(id)}} onMouseDown={()=>{this.mouse_down(id)}} onClick={()=>this.Click(id)} id={id}>{this.state.tbl[irow][icolm]}</td>
                          )
                      })}
                  </tr> 
              ))}
          </table>
        </div>
    )
  }
}

export default function App() {
  return (
    <div className="App">
      hello uwu
      <Mytable className="Table" size={20} />
    </div>
  );
}


