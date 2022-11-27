import React, { useContext } from "react";
import { LanguageContext } from "../App";

const lan = ['en', 'fi']

const LanguageSwitch = () => {
  const {state, dispatch} = useContext(LanguageContext)
  return(
    <li>
      <select defaultValue={state.code} onChange={(e)=>dispatch({type: e.target.value})}>
        {lan.map((l,i) => {
          return <option value={l} key={i}>{l}</option>
        })}
      </select>
    </li>
  )
}

export default LanguageSwitch