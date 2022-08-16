import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header'
import Home from 'pages/Home'
import ShareMovie from 'pages/ShareMovie'
import { Paths } from 'routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.ShareMovie} element={<ShareMovie />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
