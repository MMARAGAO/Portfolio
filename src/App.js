import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextTypingEffect from './components/TextTypingEffect';
import ToggleTheme from './components/ToggleTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider } from './ThemeContext';


function App({ }) {

  const [button1, setButton1] = useState(false);


  // adiciona h-0 ao clicar em button-1
  const handleClick1 = () => {
    document.getElementById('div-1').classList.remove('w-full');
    document.getElementById('div-1').classList.add('w-0');
    document.getElementById('div-2').classList.remove('w-0');
    document.getElementById('div-2').classList.add('w-full');
  }
  // adiciona h-0 ao clicar em button-2
  const handleClick2 = () => {
    document.getElementById('div-2').classList.remove('w-full');
    document.getElementById('div-2').classList.add('w-0');
    document.getElementById('div-3').classList.remove('w-0');
    document.getElementById('div-3').classList.add('w-full');
  }

  // adiciona h-0 ao clicar em button-3
  const handleClick3 = () => {
    document.getElementById('div-3').classList.remove('w-full');
    document.getElementById('div-3').classList.add('w-0');
    document.getElementById('div-3').classList.add('w-0');

  }


  return (
    <div className="App dark:bg-black ">
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
      <div className='flex 
      '>
        <div id='div-1' className='w-full bg-gray-200 dark:bg-gray-900 h-screen inline-block overflow-hidden transition-all duration-500 ease-in-out'>
          <div className='flex lg:flex-row flex-col w-full h-full items-center px-4 lg:px-40 space-y-8 lg:sapace-y-0 lg:space-x-8'>
            <div className='w-full lg:w-1/2'>
              {/* imagem */}
              <img src={logo} className="App-logo animate-slowBounce" alt="logo" />
            </div>
            <div className='bebas-neue-regular w-full lg:w-1/2 dark:text-white lg:text-2xl text-lg text-justify indent-8 space-y-8'>
              <TextTypingEffect setButton1={setButton1} />
              {/* se o valor de button1 for true ele aparece */}
              <button onClick={handleClick1} className={` space-x-4 bg-cyan-500 text-white rounded-xl transition-all duration-700 ease-in-out scale-100 hover:scale-110 
               ${button1 ? ' w-full px-2 py-1 hover:bg-transparent hover:text-cyan-500 hover:border-cyan-500 border-2 border-cyan-500 shadow-lg shadow-cyan-200 dark:shadow-cyan-400/50' : 'w-0 overflow-hidden '}`}>
                <span>Conheça meu trabalho</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

        </div>
        <div id='div-2' className='w-0 h-screen bg-white inline-block overflow-hidden duration-500 ease-in-out'>
          <div className='bg-white h-screen w-screen p-2 lg:p-8'>
            <div className='w-full h-full bg-black p-4 lg:p-8 flex lg:flex-row flex-col space-y-2 lg:space-y-0 lg:space-x-8 rounded-2xl shadow-2xl'>
              <div className=' w-full lg:w-2/2 h-full justify-between flex flex-col items-center'>
                <div className='bg-white w-full h-1/6'></div>
                <div className=' w-full h-4/5 flex justify-between p-'>
                  <div className='bg-white w-1/2 h-full ml-5 '></div>
                  <div className='bg-white w-1/3 h-1/2 mt-20 '></div>
                </div>
              </div>
              <div className='bg-blue-500 w-full lg:w-1/2 h-full'></div>
            </div>
          </div>


        </div>
        <div id='div-3' className='w-0 bg-purple-500/50 h-screen inline-block overflow-hidden duration-500 ease-in-out'>
          <button onClick={handleClick3}>teste3</button>
        </div>
      </div>
    </div>
  );
}

export default App;
