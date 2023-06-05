import React from 'react'
import { Container, Item, Logo, NavItem, Wrapper } from './style'
import {navbar} from '../../utils/navbar' 
import {  useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Wrapper>
        <Item onClick={()=>navigate('/home')} logo><Logo/> Houzing </Item>
        <Item>
          {
            navbar.map(( value,index)=>{
              return(

                <NavItem key={index} to={value.path}>{value.title}</NavItem>
              )
            })
          }
        
        </Item>
        <Item>Button</Item>

      </Wrapper>
    </Container>
  )
}
export default Navbar