// import logo from './logo.svg';
import Shoppinglist from './ShoppingList';
import './App.css';
import Colors from './colorpicker';

function App() {
  return (
    <div className="App">
      <h2>Shopping List </h2>
      <Colors />

      <Shoppinglist />
    </div>
  );
}

export default App;
