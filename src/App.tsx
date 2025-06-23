import {  useState } from 'react'
import './App.css'
import Game from './components/Game'
import Header from './components/Header'

{/* <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by srip - Flaticon</a> */}
// --text: #e2dff9;
// --background: #08051a;
// --primary: #9d94ea;
// --secondary: #8b281c;
// --accent: #dcbe4f;

// --text: #180222;
// --background: #fcf7ff;
// --primary: #b115f0;
// --secondary: #f780bc;
// --accent: #f45772;

function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const soundChange = ()=>{
    setSoundEnabled(!soundEnabled)
  }
  return (
    <div className='p-10 flex-row gap-8'>
      <Header enableSound={soundEnabled} onClickSoundButton={soundChange} />
      <Game enableSound={soundEnabled}/>
    </div>
  )
}

export default App
