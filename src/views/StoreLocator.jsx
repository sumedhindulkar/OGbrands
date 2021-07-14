import React,{useState}from 'react'
import StoreLocatorHero from '../components/StoreLocatorHero/StoreLocatorHero'
import MapView from '../components/MapView/MapView'

const StoreLocator = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>  
            <StoreLocatorHero/>
            <MapView/>
        </>
    )
}

export default StoreLocator