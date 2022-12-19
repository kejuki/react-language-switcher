import { useContext } from "react"
import { LanguageContext } from "../../App"
import { text } from "../../text"

function Home() {
  const { state } = useContext(LanguageContext)
  return(
    <div className="page-content">
      <h1>{text[state.code]['home']}</h1>
      <p>{text[state.code]['homeContent']}</p>
    </div>
  )
}
export default Home