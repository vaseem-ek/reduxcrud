// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { updateProduct } from '../redux/slices/product';
// import { useDispatch, useSelector } from 'react-redux';

// function Updates() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const productList = useSelector(state => state.prouctReducer)
//     // const existing = productList.filter((fe) => fe.id == id)
//     const { name, produ, price } = productList
//     const [newName, setNewName] = useState(name)
//     const [newProdu, setnewProdu] = useState(produ)
//     const [newPrice, setnewPrice] = useState(produ)

//     const dispatch = useDispatch()

//     const handleuodate = (e) => {
//         e.preventDefault()
//         dispatch(updateProduct({ id: id, name: newName, produ: newProdu, price: newPrice }))
//         handleClose()
//     }


//     return (
//         <>
//             <Button onClick={handleShow}>
//                 edit
//             </Button>

//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal title</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <input type="text" placeholder='name ' className='p-1 m-1 w-100' onChange={(e) => { setNewName(e.target.value) }} />
//                     <input type="text" placeholder='product' className='p-1 m-1 w-100' onChange={(e) => { setnewProdu(e.target.value) }} />
//                     <input type="number" placeholder='price' className='p-1 m-1 w-100' onChange={(e) => { setnewPrice(Number(e.target.value)) }} />

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleuodate}>Update</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );

// }

// export default Updates
