import {BrowserRouter,Route,Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Contacts from './pages/contacts';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
