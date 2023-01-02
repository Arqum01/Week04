import React, { Component } from 'react';
import LifeCycleHooks from '../Lifecycle Hooks/LifeCycleHooks';

class LifeCycleMethod extends Component {

  constructor(props){
    super(props)

    this.state={count:0}
  }
  increament=()=>{
      this.setState({
        count:this.state.count+1
      })
  }

  componentDidMount(){
    console.log("Component Mount")
  }

  componentDidUpdate(prevstate){
    if(prevstate.count != this.state.count)
    {console.log("Component Updated")}
  }

  componentWillUnmount(){
    console.log("Component unMount")
  }
  

  render() {
    return (
      <>
        <LifeCycleHooks number={this.state.count} />
        <button onClick={this.increament}> Click Me </button>
        
      </>
    );
  }
}

export default LifeCycleMethod;