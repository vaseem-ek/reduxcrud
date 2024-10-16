import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { addProduct, deleteProduct, updateProduct } from '../redux/slices/product';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Updates from './Updates';

function Dashbord() {
  const [name, setName] = useState("")
  const [produ, setProdu] = useState("")
  const [price, setPrice] = useState(0)
  const productList = useSelector((state) => state.productReducer.users)

  const dispatch = useDispatch()

  const [newname, setnewName] = useState("")
  const [newprodu, setnewProdu] = useState("")
  const [newprice, setnewPrice] = useState(0)




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const edititng = () => {
  //   dispatch(updateProduct({ id: user.id, name: newname, produ: newprodu, price: newprice }))
  //   console.log(updateProduct({ id: user.id, name: newname, produ: newprodu, price: newprice }));

  //   handleClose()
  // }
  // const handleedit=()=>{
  //   dispatch(updateProduct({ id:productList[productList.length-1].id+1, newname, newprodu, newprice }))
  //   handleClose()
  // }


  return (
    <>
      <div className='app d-flex justify-content-center mt-3'>
        <div className='addUser'>
          <div className='d-flex justify-content-around flex-wrap '>
          <input type="text" placeholder='name ' className='p-1 m-1 form-control' onChange={(e) => { setName(e.target.value) }} />
          <input type="text" placeholder='product' className='p-1 m-1 form-control' onChange={(e) => { setProdu(e.target.value) }} />
          <input type="number" placeholder='price' className='p-1 m-1 form-control' onChange={(e) => { setPrice(Number(e.target.value)) }} />
          </div>
          <div className='d-grid my-2'>
            <button className='btn btn-success ' onClick={() => { dispatch(addProduct({ id: productList[productList.length - 1].id + 1, name, produ, price })) }}> add</button>
          </div>

        </div>

      </div>

      <div className='mt-2 flex-wrap row container d-flex justify-content-center'>
        {
          productList.map((user) => {
            return (
              <Card id='cards' style={{ maxWidth: "15rem" }} className='m-2 bg-primary'>

                <Card.Body>
                  <Card.Title> <h1 className='text-warning'>{user.name}</h1> </Card.Title>
                  <hr />
                  <Card.Text>
                    <h3>{user.produ}</h3>
                    <hr />
                    <h3>{user.price}</h3>
                  </Card.Text>
                </Card.Body>
                <div className=''>
                  <input type="text" placeholder='name ' className='p-1 m-1 form-control' onChange={(e) => { setnewName(e.target.value) }} />
                  <input type="text" placeholder='product ' className='p-1 m-1 form-control' onChange={(e) => { setnewProdu(e.target.value) }} />
                  <input type="number" placeholder='price ' className='p-1 m-1 form-control' onChange={(e) => { setnewPrice(e.target.value) }} />
                  <div className='d-flex justify-content-between'>

                    <button className='btn text-white' onClick={() => { dispatch(updateProduct({ id: user.id, name: newname, produ: newprodu, price: newprice })) }}>Update</button>
                    <button className='btn text-white' onClick={() => { dispatch(deleteProduct({ id: user.id })) }}>Delete</button>

                  </div>
                </div>
              </Card>

            )
          })
        }

      </div>

      <div>
        {/* {
    productList.map(user=>{
      return(

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder='name ' value={user.name}className='p-1 m-1 w-100' onChange={(e) => { setnewName(e.target.value) }} />
          <input type="text" placeholder='product' value={user.produ} className='p-1 m-1 w-100' onChange={(e) => { setnewProdu(e.target.value) }} />
          <input type="number" placeholder='price' value={user.price} className='p-1 m-1 w-100' onChange={(e) => { setnewPrice(Number(e.target.value)) }} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary " onClick={handleedit} >Upadated</Button>
        </Modal.Footer>
      </Modal>
      )
    })
  } */}
      </div>


    </>
  )
}

export default Dashbord
