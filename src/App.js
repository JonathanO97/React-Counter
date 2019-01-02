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
    this.setState({counters});
};

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0; 
        return c; 
    })
    this.setState({counters});
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId); 
    this.setState({counters});
};

  render() {
    // Children rendered recursively 

    return (
      <React.Fragment>
        <NavBar totalCount={this.state.countSum}></NavBar>
        <main className="container">
        <h1>Add or Delete counters</h1>
          <Counters
            counters={this.state.counters} 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}>
          </Counters>
        </main>
      </React.Fragment>
    );
  }
  
}

export default App;
