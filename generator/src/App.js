// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import data from './utils/memeData.json'


function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
