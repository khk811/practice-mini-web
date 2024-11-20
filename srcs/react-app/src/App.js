import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { firestore, timestamp } from './firebase';

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');

  const fetchData = async () => {
    try {
      const snapshot = await firestore.collection('testCollection').get();
      const docs = snapshot.docs.map(doc => doc.data());
      setData(docs);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const addData = async () => {
    try {
      await firestore.collection('testCollection').add({
        message: newData,
        timestamp: timestamp
      });
      fetchData();
      setNewData('');
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Firestore 데이터 읽기/쓰기</h1>
      <ul>
        {data.map((doc, index) => (
          <li key={index}>{doc.message}</li>
        ))}
      </ul>
      <input
      type='text'
      value={newData}
      onChange={(e) => setNewData(e.target.value)}
      placeholder='새로운 메시지 입력'
      />
      <button onClick={addData}>데이터 추가</button>
    </div>
  );
}

export default App;
