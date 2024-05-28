import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageGen from './components/ImageGen';
import InstaProfile from './components/InstaProfile';
import Home from './components/Home';
import HomeResult from './components/ResultAnalysis/Home';
import CommingSoon from './components/CommingSoon';
import Footer from './components/Footer';
import Roulette from './components/money/Roulette';
import Wallet from './components/money/Wallet';
import Signup from './components/money/Signup';
import Login from './components/money/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UploadResult from './components/ResultAnalysis/UploadResult';
import Disclaimer from './components/ResultAnalysis/Disclaimer';



function App() {
  const [deposit, setDeposit] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/deposits`)
      .then(response => setDeposit(response.data))
      .catch(err => console.error(err));
  }, []);
  const [chips, setChips] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/chips`)
      .then(response => setChips(response.data))
      .catch(err => console.error(err));
  }, []);
  const [roulette, setRoulette] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/roulette`)
      .then(response => setRoulette(response.data))
      .catch(err => console.error(err));
  }, []);
  const [loans, setLoans] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/loans`)
      .then(response => setLoans(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>

      <Router>
        {/* Home Route */}
        <Routes>
          <Route path='/' exact element={<>
            <HomeResult></HomeResult>
          </>}
          />
        </Routes>
        <Routes>
          <Route path='/h' exact element={<>
            <Home></Home>
            <Footer></Footer>
          </>}
          />
        </Routes>
        {/* Instagram Route */}
        <Routes>
          <Route path='/instaProfile' exact element={<>
            <InstaProfile></InstaProfile>
            <Footer></Footer>
          </>}
          />
        </Routes>
        {/* AI Image Route */}
        <Routes>
          <Route path='/imageGenerator' exact element={<>
            <ImageGen></ImageGen>
            <Footer></Footer>
          </>}
          />
        </Routes>
        {/* AI Chatbot */}
        <Routes>
          <Route path='/chatbot' exact element={<>
            <CommingSoon></CommingSoon>
            <Footer></Footer>
          </>}
          />
        </Routes>
        {/* Cricket Score */}
        <Routes>
          <Route path='/cricketScore' exact element={<>
            <CommingSoon></CommingSoon>
            <Footer></Footer>

          </>}
          />
        </Routes>


        <Routes>
          <Route path='/login' exact element={<>
            <Login></Login>

          </>}
          />
        </Routes>
        <Routes>
          <Route path='/signup' exact element={<>
            <Signup></Signup>

          </>}
          />
        </Routes>
        <Routes>
          <Route path='/test/Roulette' exact element={<>
            <Roulette></Roulette>

          </>}
          />
        </Routes>
        <Routes>
          <Route path='/test/Wallet' exact element={<>
            <Wallet deposit={deposit} chips={chips} roulette={roulette} loans={loans}></Wallet>
          </>}
          />
        </Routes>

        {/* // Result analysis */}
        <Routes>
          <Route path='/result' exact element={<>
            <HomeResult></HomeResult>
          </>}
          />
        </Routes>
        <Routes>
          <Route path='/upload' exact element={<>
            <UploadResult></UploadResult>
          </>}
          />
        </Routes>
        <Routes>
          <Route path='/disclaimer' exact element={<>
            <Disclaimer></Disclaimer>
          </>}
          />
        </Routes>
      </Router>

    </>
  );
}

export default App;
