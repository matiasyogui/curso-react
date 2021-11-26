import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const saludo1 = "Hola Mundillo!";
  const texto1 = "Sample text";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={saludo1} texto={texto1} />
      <Footer />
    </div>
  );
}

export default App;
