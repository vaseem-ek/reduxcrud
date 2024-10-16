import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Landing() {
    return (
        <>
            <div className='container'>
                <Row>
                    <Col className='p-5 mt-5' md={12} lg={6}>
                        <h1 className='m-auto'>Poducts <span className='text-primary'>for Football</span></h1>
                        <hr className='w-25 ms-3 text-primary' />
                        <p className='mt-4' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In asperiores laudantium eaque nam possimus! Numquam beatae deleniti alias porro velit dolorem culpa praesentium similique, eveniet dolores reprehenderit eaque nesciunt ut?</p>
                        <div className='border btn mt-3 btn-secondary'>
                            <Link style={{ textDecoration: "none" }} className='text-warning' to={'/dash'}>Read more</Link>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                       <div className='p-5'>
                       <img className='img-fluid ' src="https://i.pinimg.com/originals/1e/3e/37/1e3e3738d81b9db4f6b6505b236a996a.gif" alt="" />
                       </div>

                    </Col>
                </Row>
            </div>


        </>
    )
}

export default Landing
