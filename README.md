# Chatbot-For-Patient-Screening

**Functionality**: 
1. Chatbot: chat.js  
    - Contains the UI componenet of Chat Window
2. Addflow: addflow.js  
    - Contains the Form Component to Add New Data to the Database
3. Visualize flow as tree: flowtree.js  
    - Contains the Flowtree Component that visualizes the json data as a expandable and collapsable tree
4. Visualize flow as graph: graph/ReactFlowRenderer 	  
    - Contains the FLow maker component that converts the nodes and edges into a graph based visualization
5. 2-D Drawing: canvas.js  
    - Contains the componenet tp Draw on 2-D object
6. 3-D Drawing: medical body painter  
    - Contains the component to Draw on 3-D body

**Steps to Run**:  
* Client  
    - Navigate to `client` directory  
      1. Install required packages using `npm i`
    - Start client using `npm start`

* Server  
    - Navigate to `server` Directory `python server.py`

* 3-D body marker:  
    - using the **input option** in the bottom left open the following files in the exact order
      1. `lowresfullbody.obj` file
      2. `upperbody.obj` file
      3. `lowerbody.obj` file
    - then open `index.html` to view the project  

**Dependencies**:
* React
    - "antd": "^5.4.6",
    - "axios": "^1.2.2",
    - "d3-force": "^3.0.0",
    - "d3-shape": "^3.2.0",
    - "match-sorter": "^6.3.1",
    - "react": "^18.2.0",
    - "react-bootstrap": "^2.7.4",
    - "react-d3-graph": "^2.6.0",
    - "react-dom": "^18.2.0",
    - "react-flow-renderer": "^10.3.17",
    - "react-json-view": "^1.21.3",
    - "react-router-dom": "^6.6.1",
    - "react-scripts": "5.0.1",
    - "react-scroll-to-bottom": "^4.2.0",
    - "sort-by": "^1.2.0",
    - "vue-json-print": "^0.3.2",
    - "web-vitals": "^2.1.4"

* Python
    - Flask
    - Flask Cors
    - Requests 
    - json
    - pandas
    - re
    - fuzzywuzzy
    - spacy
    - bson
    - nltk
    - pymongo
    - 
