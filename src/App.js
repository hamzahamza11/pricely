import "./styles/main.scss";
import Header from "./components/Header-Footer/header";
import Footer from "./components/Header-Footer/footer";
import Alerts from "./components/components/alerts";
function App() {
  return (
    <div className="app">
      <Header />
      <Alerts />
      <Footer />
    </div>
  );
}

export default App;
