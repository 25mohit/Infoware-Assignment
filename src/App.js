import { useState } from 'react';
import './App.css';
import { Favorite } from './components/favorite/Favorite';
import { Home } from './components/home/Home';
import { Nevbar } from './components/nevbar/Nevbar';

function App() {
  const [showFavourite, setShowFavourite] = useState(false)

  return (
    <div className="App">
        <Nevbar showFav={ setShowFavourite }/>
        <Home />
        {showFavourite && <Favorite setShowFavourite={ setShowFavourite } />}
    </div>
  );
}

export default App;
