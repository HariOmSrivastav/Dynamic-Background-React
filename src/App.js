import logo from './logo.svg';
import './App.css';

function changeBackgroundColor(color) {
  const name = document.querySelector('.body');
  if(name){
    name.style.backgroundColor = color;
  }
}

function App() {
  return (
    <div className='body'>
      <div className='logo'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h6 className='r'>REACT</h6>
      <footer className='myfoot'>
        <button className='btn' onClick={() => changeBackgroundColor('cadetblue')}>B</button>
        <button className='btn' onClick={() => changeBackgroundColor('steelblue')}>S</button>
        <button className='btn' onClick={() => changeBackgroundColor('teal')}>T</button>
        <button className='btn' onClick={() => changeBackgroundColor('palegreen')}>G</button>
      </footer>
    </div>
  );
}

export default App;
