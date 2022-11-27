import React from 'react';
import NavbarItem from './components/NavbarItem'
import LanguageSwitch from './components/LanguageSwitch'
import { Home } from "./components/pages/Home";
import { Libraries } from "./components/pages/Libraries";
import { About } from "./components/pages/About";
import { Routes, Route } from "react-router-dom"
import { useReducer } from 'react'
import languageReducer from "./reducers/languageReducer";
import { text } from './text'

export const LanguageContext = React.createContext()

function App() {
  //initializes reducer, sets default language either from localstorage, browsers navigator object or defaults to english.
  const [state, dispatch] = useReducer(
    languageReducer, 
    JSON.parse(localStorage.getItem("localization")) || 
    {code: navigator.languages.find(lan => lan === "fi" || lan === "en") || 
    "en"
  }) 
  
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
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/libraries" element={<Libraries/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
