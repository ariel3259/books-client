import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Auth } from "./Containers/Auth/Auth"
import { Register } from "./Containers/Register/Register"
import { Books } from "./Containers/Books/Books";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route 
        path="/" 
        element={<Auth /> } />
        
        <Route 
        path="/register" 
        element={<Register />} />
        
        <Route 
        path="/books" 
        element={<Books />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
