import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ex0 from './Ex0/Ex0';
import Ex01 from './Ex0/Ex01';
import Ex02 from './Ex0/Ex02';
import MyExercise from './Ex0/Ex03/MyExercise';
import Ex04 from './Ex0/Ex04';
import Ex10 from './Ex1/Ex10';
import Ex11 from './Ex1/Ex11';
import Ex12 from './Ex1/Ex12/Ex12';
import Ex13 from './Ex1/Ex13/Ex13';
import Ex21 from './EX2/Ex21';
import Ex22 from './EX2/Ex22';
import Ex23 from './EX2/Ex23';
import Ex3 from './Ex3';
import Ex41 from './Ex4/Ex41';
import Ex42 from './Ex4/Ex42';
import Ex43 from './Ex4/Ex43';
import Ex44 from './Ex4/Ex44';
import Ex45 from './Ex4/Ex45';
import Ex46 from './Ex4/Ex46';
import Ex47 from './Ex4/Ex47';
import Drum from './Hw1/drum';
import Piano from './Hw2/Hw2';
import Hw3 from './Hw3/Hw3';
import Hw4 from './Hw4/Hw4';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Ex0" element={<Ex0 />} />
        <Route path="/Ex01" element={<Ex01 />} />
        <Route path="/Ex02" element={<Ex02 />} />
        <Route path="/MyExercise" element={<MyExercise />} />
        <Route path="/Ex04" element={<Ex04 />} />
        <Route path="/Ex10" element={<Ex10 />} />
        <Route path="/Ex11" element={<Ex11 />} />
        <Route path="/Ex12" element={<Ex12 />} />
        <Route path="/Ex13" element={<Ex13 />} />
        <Route path="/Ex21" element={<Ex21 />} />
        <Route path="/Ex22" element={<Ex22 />} />
        <Route path="/Ex23" element={<Ex23 />} />
        <Route path="/Ex3" element={<Ex3 />} />
        <Route path="/Ex41" element={<Ex41 />} />
        <Route path="/Ex42" element={<Ex42 />} />
        <Route path="/Ex43" element={<Ex43 />} />
        <Route path="/Ex44" element={<Ex44 />} />
        <Route path="/Ex45" element={<Ex45 />} />
        <Route path="/Ex46" element={<Ex46 />} />
        <Route path="/Ex47" element={<Ex47 />} />
        <Route path="/drum" element={<Drum />} />
        <Route path="/Hw2" element={<Piano />} />
        <Route path="/Hw3" element={<Hw3 />} />
        <Route path="/Hw4" element={<Hw4 />} />
      </Routes>
    </Router>
  );
}

export default App;
