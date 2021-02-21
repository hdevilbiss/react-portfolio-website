/**
 * Pages
 */
import Home from './pages/Home';
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
/**
 * Styles
 */
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
      <OurWork />
      <ContactUs />
    </div>
  );
}

export default App;
