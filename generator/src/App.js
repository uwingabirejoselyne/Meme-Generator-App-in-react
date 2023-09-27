// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import data from './utils/memeData.json'
import Form from './components/Form';



const addName =(name)=>{
  console.log(name);
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
      <Form onAdd ={addName}/>
    </div>
  );
}

export default App;
