import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components and pages
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Form from './pages/Form'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
            path = "/add-blog"
            element={<Form />}
            />
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
