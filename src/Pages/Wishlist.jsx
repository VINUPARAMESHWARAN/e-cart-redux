import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishList } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'

function Wishlist() {
  const WishlistArray= useSelector((state=>state.wishListReducer))
  const dispatch= useDispatch()
  const handleWishListCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishList(product.id))
  }
  return (
    <>
    <div style={{marginTop:'50px'}}>

    
    <Row>
      {
        WishlistArray.length>0?
        WishlistArray.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '20rem', height:'30rem' }}>
          <Card.Img height={"200px"} variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title className='text-primary'>{product.title}</Card.Title>
            <Card.Text>
              <p>{product.description.slice(0,50)}...</p>
              <h5>${product.price}</h5>
            </Card.Text>
            <div className='d-flex justify-content-between'>
            <Button className='btn btn-light'
             onClick={()=>dispatch(removeFromWishList(product.id))}
             ><i class="fa-solid fa-trash text-danger"></i></Button>
            <Button onClick={()=>handleWishListCart(product)}
             className='btn btn-light'><i class="fa-solid fa-cart-shopping text-warning"></i></Button>
            </div>
            
          </Card.Body>
        </Card>
            </Col>
        )):
<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-item-center'>
  <img height={'500px'} width={'500px'} src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />
  <h3 className='text-center text-danger'>Wishlist is Empty</h3>
  <Link style={{textDecoration:'none'}} className='btn btn-warning rounded' to={'/'}>Back to Home</Link>
</div>

}
      
    </Row>
    </div>
    </>
  )
}

export default Wishlist