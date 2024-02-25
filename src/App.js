import React from 'react';
import './App.css';

// Dynamically import images
const images = [];
for (let i = 1; i <= 5; i++) {
  images.push(require(`./images/${i}.png`));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-gallery">
          {images.map((imgSrc, index) => (
            <img src={imgSrc} alt={`Menu ${index + 1}`} key={index} className="menu-photo" />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
