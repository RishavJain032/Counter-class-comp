import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleDeccrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
  
render(){
    return(<>
        <div id="container">
            <h1 >Count is {this.state.count}</h1>
            </div>
            <div className="buttons">
            
        <button className="inc" onClick=  {this.handleIncrement}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="dec" onClick={this.handleDeccrement}>Decrement</button>
        </div>
        </>
    )
}
}
export default Counter;