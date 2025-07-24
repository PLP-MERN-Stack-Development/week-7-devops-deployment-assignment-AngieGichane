import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/health');
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Error connecting to backend');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to MERN App</h1>
      <p>Backend status: {message}</p>
    </div>
  );
}