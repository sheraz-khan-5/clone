import React,{useState} from 'react'
import GTDSection from '../components/GTD'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}  />
                 <HeroSection />
                 <GTDSection />
           
           
            
        </>
    )
}

export default Home
