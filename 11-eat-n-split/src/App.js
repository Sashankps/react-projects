import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';



function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendComponent />
        <FormAddFriend submit = {submit}  />
        <button>Add Friend</button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendComponent() {
  const [Friends, setFriends] = useState(initialFriends); 
  const submit = (e,item) => { 
    e.preventDefault(); 
    setFriends([...Friends, {id:uuidv4(),name : item.name,img:item.img, balance : 0}]); 
}

  return (
    <ul>
      {initialFriends.map((m) => (
        <li key={m.id}>
          <img src={m.image} alt={m.name} />
          <h3>{m.name}</h3>
          {m.balance < 0 && (
            <p>
              You owe {m.name} {Math.abs(m.balance)}$
            </p>
          )}
          {m.balance > 0 && (
            <p>
              {m.name} owes you {Math.abs(m.balance)}$
            </p>
          )}
          {m.balance === 0 && (
            <p>
              You and {m.name} are even
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

let initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah", 
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function FormAddFriend() { 
    const [name, setName] = useState(''); 
    const [img, setImg] = useState(''); 


  

  return (
    <div>
      <form className='form-add-friend'>

        <label>🧑‍🤝‍🧑 Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

        <label>📷 Image URL</label>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/> 
        <button onClick={this.props.submit}>Add</button>   
      </form>
    </div>
  )
}

function FormSplitBill() { 
  return ( 
    <form className="form-split-bill">
        <h2>Split a bill with X</h2>

        <label>Bill Value</label>
        <input type="text"/>
        <label>Your expense </label>
        <input type="text"/>
        <label>X's expense </label>
        <input type="text" disabled/>

        <label>Who is paying the bill`</label>
        <select>
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>
    </form>
  )
}



export default App;
