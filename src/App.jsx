import React from 'react'
import SideBar from './sidebar/SideBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Practice from './practice-test/screen/Practice'
import History from './history-test/screen/History'
import About from './about-us/screen/About'
import Contact from './contact-us/screen/Contact'
import Review from './history-test/review-history/screen/Review'
import Profile from './profile/screen/Profile'

const App = () => {
  return (
    // <SideBar />
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="/history-test" element={<History />} />
        {/* <Route path="/about-us" element={<About />} /> */}
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/history-test/review-history" element={<Review />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App