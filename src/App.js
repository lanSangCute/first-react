import './App.css';
import Welcome from "./pages/welcome/welcome"
import Clock from "./pages/clock/clock"
import Calculator from "./pages/calculator/calculator"
import FilterableProductTable from "./pages/filterableProductTable/filterableProductTable"
import Focus from './pages/focus/focus'
import Form from './pages/form/form'
import './pages/import/import'
import ReactLazy from './pages/reactLazy/reactLazy'
import Context from './pages/context/context'
import NoEs6 from './pages/NoEs6/NoEs6'
import Jsx from './pages/jsx/jsx'
import HighComps from './pages/HighComps/HighComps'
function App() {
  return (
    <div className="App">
      <main>
        <Welcome name="lanjuan" />
        <Clock />
        <Calculator />
        <FilterableProductTable />
        <Focus />
        <Form />
        <ReactLazy />
        <Context />
        <NoEs6 name="lanjuan" />
        <Jsx kind="jsx" onClick={()=>console.log('click')} />
        <HighComps />
      </main>
    </div>
  );
}

export default App;
