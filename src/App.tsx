import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutSection from './components/Contents/AboutSection';
import IndexPage from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
      <Route path="/about" exact component={AboutSection} />
    </Router>
  );
}

export default App;
