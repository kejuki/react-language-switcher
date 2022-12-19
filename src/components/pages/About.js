import { useContext } from "react"
import { LanguageContext } from "../../App"
import { text } from "../../text"

function About() {
  const { state } = useContext(LanguageContext)
  return(
    <div className="page-content">
      <h1>{text[state.code]['about']}</h1>
      <p>{text[state.code]['aboutContent']}</p>
    </div>
  )
}
export default About