/**
 * Pages
 */
import Home from './pages/Home';
import Nav from "./components/Nav";
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
    </div>
  );
}

export default App;
