import React,{useState} from 'react'
import ContactUs from '../components/ContactUs/index.js'
import ExampleDeliverables from '../components/ExampleDeliverables.js'
import FeeStructure from '../components/FeeStructure'
import Footer from '../components/Footer/index.js'
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
                 <FeeStructure  isOpen={isOpen} toggle={toggle} />
                 <ExampleDeliverables isOpen={isOpen} toggle={toggle}/>
                 <ContactUs />
                 <Footer />
           
           
            
        </>
    )
}

export default Home
