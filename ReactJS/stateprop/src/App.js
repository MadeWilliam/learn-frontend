import React from 'react';
import './App.css';
import Kursus from './state/State';
import Materi from './props/Prop';

function App() {
  return (
    <div className="App">
      <h1>Contoh State</h1>
      <hr/>
      <Kursus/>
      <Materi img={require("./props/images/image1.jpg")} desc="belajar SEO" harga="120000"/>
      <Materi img={require("./props/images/image2.jpg")} desc="belajar google adword" harga="400000"/>
      <Materi img={require("./props/images/image3.jpg")} desc="belajar react js" harga="500000"/>
    </div>
  );
}

export default App;
