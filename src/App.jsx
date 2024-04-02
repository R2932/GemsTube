import { useState, useEffect } from 'react'
import Navbar from '@assets/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '@/Home/Home'
import Loader from '@assets/Loader/Loader';


function App() {

  //loader//////////////////////////////////////////////////////////////
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  //other/////////////////////////////////////////////////////////////////
  const [sidebar,setsidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleSidebar = () => {
    setsidebar(prevState => !prevState);
  };

  /////////////////////////////////////////////////////////////////////////


  const [showNav,setShownav] = useState(true);
  const toggleShownav = () => {
    setShownav(prevState => !prevState);
  };



  return (
<div className="app-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar toggleSidebar={toggleSidebar} handleSearch={handleSearch} toggleShownav={toggleShownav}/>
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Home sidebar={sidebar} showNav={showNav} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  )
}

export default App