import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
 <>

    <div className="NuevoNav">
      <NavBar />
    </div>

    <div>
       <ItemListContainer greeting={"Bienvenidos a Burguersaurios"}/>
    </div>

 </>
  )
}

export default App
