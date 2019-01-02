import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement, onAdd} = this.props;

        return ( 
            <div>
                <button 
                    onClick={onReset} 
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                <button
                    onClick={onAdd}
                    className="btn btn-primary btn-sm m-2">
                    Add
                </button>
                {counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement} 
                    counter={counter}
                    onAdd={onAdd}>
                </Counter>
                ))}
            </div>
         );
    }
}
 
export default Counters;