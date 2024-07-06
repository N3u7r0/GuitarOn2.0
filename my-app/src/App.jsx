import NavBar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer/index';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"No hay produtos disponibles."}/>
    </>
  );
}

export default App;
