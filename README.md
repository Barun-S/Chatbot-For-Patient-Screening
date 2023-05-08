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
    - asttokens==2.2.1
    - blis==0.7.9
    - bson==0.5.10
    - catalogue==2.0.8
    - certifi==2022.12.7
    - charset-normalizer==3.1.0
    - click==8.1.3
    - colorama==0.4.6
    - confection==0.0.4
    - contourpy==1.0.7
    - cycler==0.11.0
    - cymem==2.0.7
    - dnspython==2.3.0
    - en-core-web-sm @ https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-3.5.0/en_core_web_sm-3.5.0-py3-none-any.whl
    - executing==1.2.0
    - Flask==2.2.3
    - Flask-Cors==3.0.10
    - fonttools==4.39.3
    - fuzzywuzzy==0.18.0
    - graphviz==0.20.1
    - icecream==2.1.3
    - idna==3.4
    - itsdangerous==2.1.2
    - Jinja2==3.1.2
    - joblib==1.2.0
    - kiwisolver==1.4.4
    - langcodes==3.3.0
    - Levenshtein==0.21.0
    - MarkupSafe==2.1.2
    - matplotlib==3.7.1
    - murmurhash==1.0.9
    - networkx==3.1
    - nltk==3.8.1
    - numpy==1.24.2
    - packaging==23.1
    - pandas==2.0.0
    - pathy==0.10.1
    - Pillow==9.5.0
    - preshed==3.0.8
    - pydantic==1.10.7
    - Pygments==2.15.1
    - pymongo==4.3.3
    - pyparsing==3.0.9
    - pytextrank==3.2.4
    - python-dateutil==2.8.2
    - python-Levenshtein==0.21.0
    - pytz==2023.3
    - rapidfuzz==3.0.0
    - regex==2023.3.23
    - requests==2.28.2
    - scipy==1.10.1
    - six==1.16.0
    - smart-open==6.3.0
    - spacy==3.5.2
    - spacy-legacy==3.0.12
    - spacy-loggers==1.0.4
    - srsly==2.4.6
    - thinc==8.1.9
    - tqdm==4.65.0
    - typer==0.7.0
    - typing_extensions==4.5.0
    - tzdata==2023.3
    - urllib3==1.26.15
    - wasabi==1.1.1
    - Werkzeug==2.2.3

