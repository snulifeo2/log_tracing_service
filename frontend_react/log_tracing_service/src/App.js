import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogViewPage from './log-view/LogViewPage';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/logview/:pathValue" element={<LogViewPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
  
}

export default App;
