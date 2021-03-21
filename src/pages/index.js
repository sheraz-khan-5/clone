import React,{useState} from 'react'
import FeeStructure from '../components/FeeStructure'
import GTDSection from '../components/GTD'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
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
            <Navbar   toggle={toggle} />
                 <HeroSection />
                 <GTDSection />
                 <HowItWorks /> 
                 <FeeStructure />
           
           
            
        </>
    )
}

export default Home
