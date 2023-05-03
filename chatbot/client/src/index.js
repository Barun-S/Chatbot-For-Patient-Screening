import React from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import Canvasviewer from './canvasviewer';
import Listofpatients from './listpatient';
import Conversation from './pc';
import QuestionForm from './addflow';
import Flowchart from './flowtree.js';
import Header from "./header";
import Dropdown from "./graph.js";
import ReactFlowRenderer from './graphs/ReactFlowRenderer';
import JsonViewer from './flowtree.js';

import {nodes as fevernodes, edges as feveredges} from './graphs/fever_elements';
import {nodes as headachenodes, edges as headacheedges} from './graphs/headache_elements';
import {nodes as coughnodes, edges as coughedges} from './graphs/cough_elements';
import {nodes as vomitingnodes, edges as vomitingedges} from './graphs/vomiting_elements';
import {nodes as generalnodes, edges as generaledges} from './graphs/general_elements';
import {nodes as stomachachenodes, edges as stomachacheedges} from './graphs/stomachache_elements';
import {nodes as sorethroatnodes, edges as sorethroatedges} from './graphs/sorethroat_elements';
import {nodes as rashesnodes, edges as rashesedges} from './graphs/rashes_elements';
import {nodes as chestpainnodes, edges as chestpainedges} from './graphs/chestpain_elements';
import {nodes as fatiguenodes, edges as fatigueedges} from './graphs/fatigue_elements';
import {nodes as weightgainnodes, edges as weightgainedges} from './graphs/weightgain_elements';
import {nodes as weightlossnodes, edges as weightlossedges} from './graphs/weightloss_elements';
import {nodes as memorylossnodes, edges as memorylossedges} from './graphs/memoryloss_elements';


const options = [
  {
    label: "General Flow",
    url: "http://localhost:3000/graph/general_flow",
  },
  {
    label: "Fever",
    url: "http://localhost:3000/graph/fever",
  },
  {
    label: "Cough",
    url: "http://localhost:3000/graph/cough",
  },
  {
    label: "Headache",
    url: "http://localhost:3000/graph/headache",
  },
  {
    label: "Vomiting",
    url: "http://localhost:3000/graph/vomiting",
  },
  {
    label: "Stomachache",
    url: "http://localhost:3000/graph/stomachache",
  },
  {
    label: "Sore Throat",
    url: "http://localhost:3000/graph/sorethroat",
  },
  {
    label: "Rashes",
    url: "http://localhost:3000/graph/rashes",
  },
  {
    label: "Chest Pain",
    url: "http://localhost:3000/graph/chestpain",
  },
  {
    label: "Fatigue",
    url: "http://localhost:3000/graph/fatigue",
  },
  {
    label: "Weight Loss",
    url: "http://localhost:3000/graph/weightloss",
  },
  {
    label: "Weight Gain",
    url: "http://localhost:3000/graph/weightgain",
  },
  {
    label: "Memory Loss",
    url: "http://localhost:3000/graph/memoryloss",
  },
];


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement : <ErrorPage/>
  },
  {
    path : "/mark",
    element : <Canvasviewer/>
  },
  {
    path : "/dashboard",
    element : <Listofpatients/>
  },
  {
    path : "/patientconvo",
    element : <Conversation/>
  },
  {
    path : "/addflow",
    element : <QuestionForm/>
  },
  {
    path : "/treeflow",
    element : <JsonViewer/>
  },
  {
    path : "/graph",
    element :<Dropdown options={options} />

  },
  {
    path : "/graph/fever",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={feveredges} initialNodes={fevernodes}/> </div> 
  },
  {
    path : "/graph/cough",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={coughedges} initialNodes={coughnodes}/> </div> 
  },
  {
    path : "/graph/headache",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={headacheedges} initialNodes={headachenodes}/> </div> 
  },
  {
    path : "/graph/vomiting",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={vomitingedges} initialNodes={vomitingnodes}/> </div> 
  },
  {
    path : "/graph/general_flow",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={generaledges} initialNodes={generalnodes}/> </div> 
  },
  {
    path : "/graph/stomachache",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={stomachacheedges} initialNodes={stomachachenodes}/> </div> 
  },
  {
    path : "/graph/sorethroat",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={sorethroatedges} initialNodes={sorethroatnodes}/> </div> 
  },
  {
    path : "/graph/rashes",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={rashesedges} initialNodes={rashesnodes}/> </div> 
  },
  {
    path : "/graph/chestpain",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={chestpainedges} initialNodes={chestpainnodes}/> </div> 
  },
  {
    path : "/graph/fatigue",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={fatigueedges} initialNodes={fatiguenodes}/> </div> 
  },
  {
    path : "/graph/weightgain",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={weightgainedges} initialNodes={weightgainnodes}/> </div> 
  },
  {
    path : "/graph/weightloss",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={weightlossedges} initialNodes={weightlossnodes}/> </div> 
  },
  {
    path : "/graph/memoryloss",
    element :<div><Dropdown options={options} /> <ReactFlowRenderer initialEdges={memorylossedges} initialNodes={memorylossnodes}/> </div> 
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
