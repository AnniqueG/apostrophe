import {useState, useEffect} from 'react';

import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'

const products = [
    { name: 'Torches', artist: 'Foster The People', format: 'Vinyl', price: 40.12, picture: 'assets/images/product_11.jpg', id: '1' },
    { name: 'Thursday', artist: 'The Weeknd', format: 'Vinyl', price: 49.98, picture: 'assets/images/product_12.jpg', id: '2' },
    { name: 'Blonde on Blonde', artist: 'Bob Dylan', format: 'Vinyl', price: 58.45, picture: 'assets/images/product_13.jpg', id: '3' },
    { name: 'Long Lost', artist: 'Lord Huron', format: 'Cassette', price: 12.99, picture: 'assets/images/product_14.avif', id: '4' },
    { name: 'A Charlie Brown Christmas', artist: 'Vince Guaraldi', format: 'Cassette', price: 16.17, picture: 'assets/images/product_15.avif', id: '5' },
    { name: 'Masquerade', artist: 'Bananarama', format: 'Cassette', price: 19.00, picture: 'assets/images/product_16.avif', id: '6' },
    { name: 'At Last', artist: 'Etta James', format: 'Merch', price: 15.49, picture: 'assets/images/product_17.avif', id: '7' },
    { name: 'Bloom', artist: 'RüFÜS DU SOL', format: 'Merch', price: 47.84, picture: 'assets/images/product_18.avif', id: '8' },
    { name: 'Daytona Sand', artist: 'Orville Peck', format: 'Merch', price: 51.23, picture: 'assets/images/product_19.avif', id: '9' },

]


const ShoppingCart = () => {
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))
    let [checkout, setCheckout] = useState([
        {countID:1, count:0},
        {countID:2, count:0},
        {countID:3, count:0},
        {countID:4, count:0},
        {countID:5, count:0},
        {countID:6, count:0},
        {countID:7, count:0},
        {countID:8, count:0},
        {countID:9, count:0},
    ])        

    useEffect(() => {
    {cart.map(prod => (
        console.log(prod),
        checkout[parseInt(prod)-1].count += 1
    ))};    
    })



    const handleCheckout = () => {
        <Alert status='success'>
        <AlertIcon />
            Your order was successfully placed. Rock on!
        </Alert>
    }


    const removeItem = (itemID) => {
        let cartCopy = [...cart]

        cartCopy = cartCopy.filter(item => item.countID != itemID.countID);

        setCart(cartCopy);

        setCheckout({countID: checkout[itemID.countID-1].count , count: 0});
        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)
    }


    return (


        <div className="App">



            <section class="section-pagetop">
                <div class="container">
                    <h2 class="title-page">Shopping cart</h2>
                </div>
            </section>

            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <main class="col-md-9">
                            <div class="card">
                                <table class="table table-borderless table-shopping-cart">
                                    <thead class="text-muted">
                                        <tr class="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col" width="120">Quantity</th>
                                            <th scope="col" width="120">Price</th>
                                            <th scope="col" class="text-right" width="200"> </th>
                                        </tr>
                                    </thead>
                                    
                                    {checkout.filter(criteria => criteria.count >= 1).map(productID => (

                                    <tbody key={productID.countID}>
                                        <tr>
                                            <td>
                                                <figure class="itemside">
                                                    <div class="aside"><img src={products[productID.countID-1].picture} class="img-sm" /></div>
                                                    <figcaption class="info">
                                                        <a href="#" class="title text-dark">{products[productID.countID-1].name}</a>
                                                        <p class="text-muted small">Artist: {products[productID.countID-1].artist} <br/> Format: {products[productID.countID-1].format}</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <div class="price-wrap"> {productID.count} </div>
                                            </td>
                                            <td>
                                                <div class="price-wrap">
                                                    <var class="price"> $
                                                    <script>{products[productID.countID-1] * productID.count}</script>
                                                    </var>
                                                    <small class="text-muted">$ {products[productID.countID-1].price}</small>
                                                </div>
                                            </td>
                                            <td class="text-right">

                                                <a href="" class="btn btn-light" onClick={removeItem(productID)}> Remove</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    ))}
                                </table>

                                <div class="card-body border-top">
                                    <a href="#" class="btn btn-primary float-md-right" onCLick={handleCheckout}> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                                </div>
                            </div>

                        </main>
                        <aside class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <dl class="dlist-align">
                                        <dt>Total price:</dt>
                                        <dd class="text-right">$</dd>
                                    </dl>
                                    <dl class="dlist-align">
                                        <dt>Discount:</dt>
                                        <dd class="text-right">*</dd>
                                    </dl>
                                    <dl class="dlist-align">
                                        <dt>Total:</dt>
                                        <dd class="text-right  h5"><strong>$</strong></dd>
                                    </dl>
                                    <hr />
                                    <p class="text-center mb-3">
                                        <img src="assets/images/misc/payments.png" height="26" />
                                    </p>

                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </section>

            <footer class="section-footer border-top padding-y">
                <div class="container">

                </div>
            </footer>

        </div>
    );
}
export default ShoppingCart;