import React from 'react';
import '../styles.css';
import LeftMain from './LeftMain';
import About from './About';
import { RecoilRoot } from "recoil";


const App = () => {



  return (
    <RecoilRoot>
    <div className="App">
    <LeftMain/>
    <About/>
    </div>
    </RecoilRoot>
  );
}

export default App;