import React, { Component } from 'react';
import ColorsForm from './ColorsForm';
import { v4 as uuidv4 } from 'uuid';

class Colors extends Component {
  // this function has the main array object containing height, width, bgColor
  // array containing similar objects are iterated through divs
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: uuidv4(),
          height: 40,
          width: 40,
          backgroundColor: 'red',
        },
        {
          id: uuidv4(),
          height: 40,
          width: 40,
          backgroundColor: 'green',
        },
      ],
    };
    this.newItem = this.newItem.bind(this);
  }
  newItem(item) {
    const newnewItem = { ...item, id: uuidv4() };
    this.setState((st) => ({
      items: [...st.items, newnewItem],
    }));
  }
  render() {
    return (
      <div>
        <h2>Hello</h2>
        {this.state.items.map((m) => {
          return (
            <div
              key={m.id}
              style={{
                width: m.width + 'px',
                height: m.height + 'px',
                backgroundColor: m.backgroundColor,
              }}
            ></div>
          );
        })}
        <ColorsForm newItem={this.newItem} />
      </div>
    );
  }
}

export default Colors;
