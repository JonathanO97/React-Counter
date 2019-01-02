import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
state = { 
    counters: [],
    sum: 0
};

handleAdd = () => {
  const counters = [...this.state.counters];
  const newId = counters.length + 1; 
  const newCounter = {id: newId, value: 0}; 
  counters.push(newCounter);
  this.setState({counters});
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); 
    counters[index] = {...counter};
    counters[index].value++;
    const newSum = this.calculateSum(counters);
    this.setState({counters});
    this.setState({sum: newSum});
};

handleDecrement = counter => { 
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--; 
  const newSum = this.calculateSum(counters); 
  this.setState({counters});
  this.setState({sum: newSum}); 
};

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;  
        return c; 
    })
    this.setState({counters});
    this.setState({sum: 0});
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId); 
    const newSum = this.calculateSum(counters); 
    this.setState({counters});
    this.setState({sum: newSum});
};

  render() {
    // Children rendered recursively 

    return (
      <React.Fragment>
        <NavBar totalCount={this.state.sum}></NavBar>
        <main className="container">
        <h1>Add or Delete counters</h1>
          <Counters
            counters={this.state.counters} 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onDecrement={this.handleDecrement}>
          </Counters>
        </main>
      </React.Fragment>
    );
  }
  
  calculateSum(counters) {
    let sum = 0; 
    for(let i = 0; i < counters.length; i++) {
      if(counters[i].value > 0) {
        sum+= counters[i].value;
      } else { 
        counters[i].value = 0; 
      }
    } 
    return sum; 
  }

}

export default App;
