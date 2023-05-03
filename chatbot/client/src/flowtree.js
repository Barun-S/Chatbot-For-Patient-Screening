
import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import axios from 'axios';

const JsonViewer = () => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:5001/fetchalldata');
      setJsonData(result.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading JSON data...</p>
      ) : (
        <ReactJson src={jsonData} theme="monokai" displayDataTypes={false}
        displayObjectSize={false} 
        name={false}/>
      )}
    </div>
  );
};

export default JsonViewer;

///// working tree

