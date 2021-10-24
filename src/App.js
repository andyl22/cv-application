import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import './styles/App.css'
import TextFormSection from './components/TextFormSection.js';




function App() {

  useEffect(() => {
      console.log(document.getElementsByTagName("input"))
    },
    []
  )

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitted)
    setSubmitted(!submitted);
  }

  if (!submitted) {
    return (
      <div className="App">
        <Form handleSubmit={handleSubmit} />
      </div>
    );
  }

  return (
    <div className="App">
      <TextFormSection/>
    </div>
  )
    
}

export default App;
