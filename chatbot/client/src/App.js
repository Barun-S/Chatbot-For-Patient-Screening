import logo from './logo.svg';
import React , {useState, useEffect} from 'react';
import './App.css';
import Chat from './chat';
import Listofpatients from './listpatient';
import Axios from 'axios';
import Tes from './test';
import { Outlet, Link } from "react-router-dom";
function App() {
 return (
    <div>
      <div className='titlebar'> Patient Conversations </div>
      <div className='content'>
      <div className='verticalbar'> 
        <Link to={'/mark'}>Canvas</Link>
        <Link to={'/addflow'}>Add FLow</Link> 
        <Link to={'/treeflow'}>Tree FLow</Link>
        <Link to={'/graph'}>Visualize FLow</Link>
        <Link to={'/dashboard'}>Conversations</Link> 
      </div>
      <div className='chatmain'><Chat/></div>
      </div>
    </div>
  );
}

export default App;
