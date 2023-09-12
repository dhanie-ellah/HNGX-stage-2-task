import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
