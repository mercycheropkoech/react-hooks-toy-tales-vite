import { useEffect, useState } from "react"
import ToyContainer from "./ToyContainer"
import ToyForm from "./ToyForm"

function App() {
  const [toys, setToys] = useState([])

  // GET request
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data))
  }, [])

  return (
    <div className="App">
      <ToyForm toys={toys} setToys={setToys} />

      <ToyContainer toys={toys} setToys={setToys} />
    </div>
  )
}

export default App
