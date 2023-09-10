import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'🙋‍♀️ Bienvenidos 🙋‍♂️'}/> 
      {/* le doy un prop greeting para decirle que saludo va a mostrar */}
    </div>
  );
}

export default App;
