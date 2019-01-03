import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
state = { 
    counters: [],
    valueSum: 0,
    counterSum: 0
};

handleAdd = () => {
  const counters = [...this.state.counters];
  const newId = counters.length + 1; 
  const newCounter = {id: newId, value: 0};
  let counterSum = this.state.counterSum;
  counterSum++; 
  counters.push(newCounter);
  this.setState({counters});
  this.setState({counterSum});
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); 
    counters[index] = {...counter};
    counters[index].value++;
    const newValueSum = this.calculatevalueSum(counters);
    this.setState({counters});
    this.setState({valueSum: newValueSum});
};

handleDecrement = counter => { 
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--; 
  const newValueSum = this.calculatevalueSum(counters); 
  this.setState({counters});
  this.setState({valueSum: newValueSum}); 
};

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;  
        return c; 
    })
    this.setState({counters});
    this.setState({valueSum: 0});
    this.setState({counterSum: 0});
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId); 
    const newValueSum = this.calculatevalueSum(counters); 
    let newCounterSum = this.state.counterSum;
    newCounterSum--; 
    this.setState({counters});
    this.setState({valueSum: newValueSum});
    this.setState({counterSum: newCounterSum});
};

  render() {
    // Children rendered recursively 

    return (
      <React.Fragment>
        <NavBar totalCount={this.state.valueSum} NumberOfCounters={this.state.counterSum}></NavBar>
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
  
  calculatevalueSum(counters) {
    let valueSum = 0; 
    for(let i = 0; i < counters.length; i++) {
      if(counters[i].value > 0) {
        valueSum+= counters[i].value;
      } else { 
        counters[i].value = 0; 
      }
    } 
    return valueSum; 
  }

}

export default App;
