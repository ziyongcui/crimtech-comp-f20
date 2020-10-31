import logo from './logo.svg';
import './App.css';
import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start_time: 0, ran_once: false, counting: false, true_duration: 0, reaction_time: 0, color: 'green'};
    this.process_click = this.process_click.bind(this);
  }
  handle_color = (c) => {
    // TODO: Your code here!
    this.setState({color:c});
  }
  start_count() {
    // TODO: Your code here!
    var time  = Math.random() * 5 + 2;
    this.setState({
      start_time: window.performance.now(),
      true_duration: time,
      counting: true,
      color: 'darkred'
    });
    this.timer = setTimeout(
      () => this.handle_color('green'), time * 1000
    )
  }
  end_count() {
    // TODO: Your code here!
    var time = this.state.true_duration * 1000;
    var diff = window.performance.now() - this.state.start_time
    if (diff > time) {
      this.setState({
        ran_once: true,
        counting: false,
        reaction_time: diff - time
      });
    }
  }
  process_click() {
    if (this.state.counting) {
      this.end_count();
    } else this.start_count();
  }
  render() {
    let msg = "Hello World!";
    // TODO: Your code here!
    if (this.state.counting) {
      if (this.state.color != 'green'){
        msg = "Wait for Green";
      }
      else{
        msg = "Click";
      }
    }
    else if (this.state.ran_once) {
      msg = "Your reaction time is " + Math.round(this.state.reaction_time) + "ms";
    }
    else {
      msg = "Click to begin"
    }
    return (
      <div className = "PanelContainer" onClick = {this.process_click} style={ { background: this.state.color} }>
        <div className = "Panel">{msg}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className =  "Header">How Fast is your Reaction Time?</h1>
        <Panel />
        <p>Click as soon as the red box turns green. Click anywhere in the box to start.</p>
      </header>
    </div>
  );
}

export default App;
