import './App.css';
import Header from './pages/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SideNav from './pages/SideNav';
import RouteList from './RouteList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {
              RouteList.map((route) => {
                return (
                  route.props === 'Main'
                    ? <Route key={route.path} path={route.path} element={<route.element urlPath={route.path} />} />
                    : <Route key={route.path} path={route.path} element={<route.element />} />
                );
              })
            }
          </Routes>
          <SideNav />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
