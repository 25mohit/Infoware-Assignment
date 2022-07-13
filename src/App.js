import './App.css';
import { Home } from './components/home/Home';
import { Nevbar } from './components/nevbar/Nevbar';

function App() {
  return (
    <div className="App">
        <Nevbar />
        <Home />
    </div>
  );
}

export default App;
