import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';
import './App.css';
import { useState } from 'react';

const sportingGoods = [
  {id: 1, name: 'Football', price: '49.99', stock: 0},
  {id: 2, name: 'Baseball', price: '9.99', stock: 3},
  {id: 3, name: 'Basketball', price: '29.99', stock: 10}
]

function App() {

  const [textValue, setTxtValue] = useState('')

  const [showOnlyStock, setShowOnlyStock] = useState(false)

  const handleClick = () => {
    alert("Clicked")
  }

  return (
    <div className="App">
      {textValue}
      <TextInput value={textValue} onChange={(e) => setTxtValue(e.target.value)}/>
      <Checkbox checked={showOnlyStock} onChange={(e) => setShowOnlyStock(e.target.checked)}/>
      <button onClick={handleClick}>Submit</button>
      <table>
        <Header> </Header>
        <Category> </Category>
        <Items items={sportingGoods} includePrice query={textValue} showOnlyStock= {showOnlyStock}> </Items>
      </table>
    </div>
  );
}

export default App;
