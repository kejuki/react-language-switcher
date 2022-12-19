import React, { lazy, Suspense} from 'react';
import NavbarItem from './components/NavbarItem'
import LanguageSwitch from './components/LanguageSwitch'
import { Routes, Route } from "react-router-dom"
import { useReducer } from 'react'
import languageReducer, {initLanguageState} from "./reducers/languageReducer";
import { text } from './text'
const Home = lazy(()=> import('./components/pages/Home'))
const Libraries = lazy(()=> import('./components/pages/Libraries'))
const About = lazy(()=> import('./components/pages/About'))


export const LanguageContext = React.createContext()

function App() {
  //initializes reducer, sets default language either from localstorage, browsers navigator object or defaults to english.
  const [state, dispatch] = useReducer(languageReducer, initLanguageState()) 
  
  return (
    <div className='wrapper'>
      <LanguageContext.Provider value={{state, dispatch}}>
        <nav>
          <ul>
            <NavbarItem name={text[state.code]['home']} destination={"/"}/>
            <NavbarItem name={text[state.code]['libraries']} destination={"/libraries"}/>
            <NavbarItem name={text[state.code]['about']} destination={"/about"}/>
            <LanguageSwitch />
          </ul>
        </nav>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/libraries" element={<Libraries/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Suspense>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
