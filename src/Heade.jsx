import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar className="bg-body-tertiary py-1">
        <Container>
          <Navbar.Brand href="#home" className='text-primary fs-1'>
          <i className="fa-solid fa-truck-fast fa-xl me-3" style={{color: "#141415",}} />
          {' '}
            Shoppee
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header
