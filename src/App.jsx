import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { TopCollegeCard } from './components/topcollege_india'
import { TopCollegeStateWise } from './components/topcollegeStateWise'
import { LatestNewsSection } from './components/latestnewsSection'
import { Articles } from './components/articles'
import { CourseExplore } from './components/courseexplore'
import { Footer } from './components/footer'
import { HeroSection } from './components/herosection'
import { ExploreOption } from './components/exploreoptions'
import { BrowserFuture } from './components/browsefuture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      
      <HeroSection/>
      <BrowserFuture/>
      <CourseExplore/>
      <TopCollegeCard/>
      
      <TopCollegeStateWise/>
      <TopCollegeCard/>
      <LatestNewsSection/>
      <Articles/>
      <ExploreOption/>
      <Footer/>
    </div>
  )
}

export default App
