import React, { Component } from 'react';
import Shoppinglistform from './ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';

class Shoppinglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'Tomato',
          quantity: '2',
          id: uuidv4(),
        },
        {
          name: 'Brinjal',
          quantity: '4',
          id: uuidv4(),
        },
      ],
    };
    this.newItem = this.newItem.bind(this);
  }

  newItem(item) {
    const newItem = { ...item, id: uuidv4() };
    this.setState((st) => ({
      items: [...st.items, newItem],
    }));
  }
  render() {
    return (
      <div>
        {this.state.items.map((m) => {
          return (
            <li key={m.id}>
              {m.name} : {m.quantity}
            </li>
          );
        })}
        <Shoppinglistform newItem={this.newItem} />
      </div>
    );
  }
}

export default Shoppinglist;
