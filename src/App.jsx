/**
 * Pages
 */
import Home from './pages/Home';
/**
 * Styles
 */
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>
        ACME Mobile Meditation Co
      </h1>
      <Home />
    </div>
  );
}

export default App;
