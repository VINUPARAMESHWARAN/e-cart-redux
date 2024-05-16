import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToWishList } from '../Redux/slice/wishListSlice';
import { addToCart } from '../Redux/slice/cartSlice';
import Banner from '../Components/Banner';

function Home() {
    const data= useFetch('https://dummyjson.com/products')
    // console.log(data);
    const dispatch= useDispatch()
  return (
    <>
    <Banner/>
    <Row className='ms-5' style={{marginTop:'50px'}}>
        {data?.length>0?data.map((product,index)=>(
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
            <Button className='btn btn-light' onClick={()=>dispatch(addToWishList(product))}><i class="fa-solid fa-heart text-danger"></i></Button>
            <Button className='btn btn-light' onClick={()=>dispatch(addToCart(product))}><i class="fa-solid fa-cart-shopping text-warning"></i></Button>
            </div>
            
          </Card.Body>
        </Card>
            </Col>
        )):<p>Nothing To Display</p>}
        

    </Row>
    

    </>
  )
}

export default Home