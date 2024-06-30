
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  return (
    <div className="bg-[#1F1E24] h-screen w-screen flex">

      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
    </div>
  )
}

export default App