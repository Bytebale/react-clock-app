import React, { Component } from 'react';

import './App.css';
import Clock from './components/Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      secondRatio: 0,
      minuteRatio: 0,
      hourRatio: 0
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setClock()
    }, 1000);
  }

  setClock = () =>{
    const currentDate = new Date();
    this.setState({secondRatio: currentDate.getSeconds() / 60})
    this.setState({minuteRatio: (this.state.secondRatio + currentDate.getMinutes()) / 60})
    this.setState({hourRatio: (this.state.minuteRatio + currentDate.getHours()) / 12});
  }

  render(){
    const {secondRatio, minuteRatio, hourRatio} = this.state
    return (
        <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
    );
  }
}



export default App;