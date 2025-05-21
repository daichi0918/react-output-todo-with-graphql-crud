import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoTopPage } from './components/pages/TodoTopPage';
import { TodoEditPage } from './components/pages/TodoEditPage';
import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';
import { TodoProvider } from './contexts/TodoContext';
import { TodoCreatePage } from './components/pages/TodoCreatePage';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <TodoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TodoTopPage />} />
              <Route path="/create" element={<TodoCreatePage />} />
              <Route path="/edit/:id" element={<TodoEditPage />} />
            </Routes>
          </BrowserRouter>
        </TodoProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
