import React, { useState } from 'react';
import Form from './components/Form';
import './styles/App.css'
import TextFormSection from './components/TextFormSection.js';




function App() {

  const [state, setState] = useState({name: "", email: "", phone: "", job: "", 'current company': "", 'years of employment': "", 'technical skills': "", 'soft skills': "", languages: "" })
  function onChange(e) {
    const {name, value} = e.target
    setState(prevState => ({...prevState, [name] : value}))
    console.log(state)
  }

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitted)
    setSubmitted(!submitted);
  }

  if (!submitted) {
    return (
      <div className="App">
        <Form handleSubmit={handleSubmit} onChange={onChange}/>
      </div>
    );
  }

  return (
    <div className="App">
      <TextFormSection data={state}/>
    </div>
  )
    
}

export default App;
