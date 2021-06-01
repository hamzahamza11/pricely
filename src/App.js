import "./styles/main.scss";
import Header from "./components/Header-Footer/header";
import Alerts from "./components/components/alerts";
function App() {
  return (
    <div className="app">
      <Header />
      <Alerts />
    </div>
  );
}

export default App;
