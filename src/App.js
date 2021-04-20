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
      </main>
    </div>
  );
}

export default App;
