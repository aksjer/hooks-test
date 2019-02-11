import React, { PureComponent } from 'react';
import './App.css';

class Test2 extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { name: props.name };
  }

  componentWillReceiveProps(props: any) {
    console.log(props);
    this.setState({ name: props.name });
  }

  render() {
    console.log('test2');
    return <div>{this.state.name}</div>;
  }
}

export default Test2;
