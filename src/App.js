import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Welcome to My React Web App</h1>
      <p>{message}</p>
    </div>
  );
}
export default App;
