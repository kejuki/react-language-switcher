//languagereducer handles changes to language state
const languageReducer = (state, action) => {
  switch (action.type) {
    case 'fi':
      const fiState = {...state, code: 'fi'}
      localStorage.setItem("localization", JSON.stringify(fiState))
      return fiState
    case 'en':
      const enState = {...state, code: 'en'}
      localStorage.setItem("localization", JSON.stringify(enState))
      return enState
    default:
      return state
  }
}

export const initLanguageState = () =>{
  return  JSON.parse(localStorage.getItem("localization")) ||
          {code: navigator.languages.find(lan => lan === "fi" || lan === "en") || 
          "en"}
}

export default languageReducer