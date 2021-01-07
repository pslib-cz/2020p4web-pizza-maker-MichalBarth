import './App.css';
import Ingredience from './components/Ingredience.jsx';
import Ingrediences from './components/IngredienceList';
import Navigation from "./components/nav.jsx"

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Ingrediences></Ingrediences>
    </>
  );
}

export default App;
