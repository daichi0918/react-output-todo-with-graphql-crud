import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {' '}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoTopPage />} />
          <Route path="/create" element={<TodoCreatePage />} />
          <Route path="/edit/:id" element={<TodoEditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
