import React, { Component } from 'react';
import './App.css';
import Test1 from './test1';

export const HihiContext = React.createContext({ gender: 'female' });

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { name: 'me', a: 4, b: 3 };
    this.myinterval();
  }

  // test
  myinterval() {
    const hello = ['a', 'b'];
    const a = setInterval(() => {
      const rnd = Math.floor((Math.random() * 100) % 2);
      this.setState({ name: hello[rnd] });
    }, 2000);
    setTimeout(() => {
      this.setState({ b: 55 });
      clearInterval(a);
    }, 5000);
  }

  render() {
    const a = { gender: 'maloke' };
    return (
      <HihiContext.Provider value={a}>
        <div className="App">
          <Test1 />
          {/* <Test2 name={this.state.name} b={this.state.b} /> */}
        </div>
      </HihiContext.Provider>
    );
  }
}

export default App;
