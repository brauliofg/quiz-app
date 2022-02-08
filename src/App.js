import React from 'react';
import './style.css';
import Header from './Header';
import Form from 'Form/Form';
import Quiz from 'Quiz/Quiz';

export default function App() {
  const [apiURL, setApiURL] = React.useState();
  const [formData, setFormData] = React.useState({
    amount: '10',
    category: '0',
    difficulty: '0',
    type: '0',
  });

  function handleFormChange(id, value) {
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  return (
    <div>
      <Header formData={formData} setApiURL={setApiURL} />
      <Form
        formData={formData}
        setFormData={(id, value) => handleFormChange(id, value)}
        apiURL={apiURL}
        setApiURL={setApiURL}
      />
      <Quiz apiURL={apiURL} setApiURL={setApiURL} />
    </div>
  );
}
