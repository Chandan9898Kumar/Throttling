
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadThrotlle from './Throttling/ThrottleWithLodash';
import Funct from './Throttling/ThrottlingWithFunction'
import Home from './Home/NavLinks';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route   exact path='/'  element={<Home />} />
          <Route   exact path='/throttleLodash'    element={<LoadThrotlle  />} /> 
          <Route   exact path='/throttleWithFunction'    element={<Funct  />} />                                     />

                                              

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
