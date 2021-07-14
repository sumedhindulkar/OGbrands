import React,{useState} from 'react'
import { CardContainer, CardP, CardRow, CardTitle, CardWrapper } from './SearchCardStyle'
import {FaMapMarkerAlt,FaPhoneAlt} from 'react-icons/fa'
import {Button} from '../../components/UI Button/ButtonStyles'


const SearchCard = (props) => {

  const [hover,setHover] = useState(false)

    return (
        <>
          <CardContainer onMouseEnter={() => setHover(true)} hover={hover}>
            <CardWrapper>
              <CardTitle>{props.name}</CardTitle>
              <CardRow>
                <FaMapMarkerAlt size='12px'/>
                <CardP>{props.address}</CardP>
              </CardRow>
              <CardRow>
                <FaPhoneAlt size='12px'/> 
                <CardP>{props.phone}</CardP>
              </CardRow>
              <Button onClick={props.clickHandler}  hover={hover}  primary width='120px' height='28px' fontSize='12px' marginT='15px' marginB='20px' >VIEW ON MAP</Button>
            </CardWrapper>
          </CardContainer>    
        </>
    )
}

export default SearchCard
