import React, { Component } from 'react'

export default class Hero extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
      this.showError=this.showError.bind(this)
    }
    showError(){
        this.setState(({count})=>({count:count+1}));
    }
  render() {
    if(this.state.count===1)
    {
        throw new Error('Error occured')
    }
    return (
      <div>
        <button onClick={this.showError}>
            Show Error
        </button>

      </div>
    )
  }
}
