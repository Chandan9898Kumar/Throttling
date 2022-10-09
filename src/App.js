
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadThrotlle from './Throttling/ThrottleWithLodash';
import Home from './Home/NavLinks'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route   exact path='/'  element={<Home />} />
          <Route   exact path='/throttleLodash'    element={<LoadThrotlle  />} />                                     />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
