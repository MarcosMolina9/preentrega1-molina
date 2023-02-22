import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
 <BrowserRouter>
  
    <div className="NuevoNav">
        <NavBar />
         <ItemListContainer greeting={"Bienvenidos a Burguersaurios"}/>
        
    </div>
    <Routes>
      <Route exact path="/" element ={<ItemListContainer/>} />
      <Route exact path="/category/:id" element ={<ItemListContainer/>} />
      <Route exact path="/item/:id" element ={<ItemListContainer/>} />
     
      
      
    </Routes>
 </BrowserRouter>
 
  )
}

export default App
