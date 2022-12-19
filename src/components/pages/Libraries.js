import { useContext } from "react"
import { LanguageContext } from "../../App"
import { text } from "../../text"

function Libraries() {
  const { state } = useContext(LanguageContext)
  return(
    <div className="page-content">
      <h1>{text[state.code]['libraries']}</h1>
      <p>{text[state.code]['libraryContent']}</p>
    </div>
  )
}
export default Libraries