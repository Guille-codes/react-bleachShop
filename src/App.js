import ItemListContainer from "./components/itemListContainer/ItemListContainer"; 
import NavBar from "./components/navBar/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a tu tienda favorita. Navega por todos nuestros articulos."} />
    </div>
  );
}

export default App;
