import {useEffect, useState} from 'react';

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



const ProductList = ({title}) => {
    let [cart, setCart] = useState([])
    let localCart = localStorage.getItem("cart");
  
    useEffect(() => {
      localCart = JSON.parse(localCart);
      if (localCart) setCart(localCart)
    }, [])
    
    const addItem = (item) => {
      let cartCopy = [...cart];

        cartCopy.push(item);
    
    
        setCart(cartCopy)
    
        let string = JSON.stringify(cartCopy);
        localStorage.setItem("cart", string)
    }
    

    return ( 
        
        <div class="new_arrivals">
            <div class="container">
                <div class="row">
                    <div class="row align-items-center"></div>
                    <div class="col text-center">
                        <div class="row">
                            <div class="col">
                                <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
                                
                                    {products.filter(criteria => criteria.format == title).map(product => (
                                        <div class="product-item accessories" key={product.id}>
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                <img src={product.picture} alt="" />
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_info">
                                                <h6 class="product_name"><a href="#"> {product.name} <br /> {product.artist}</a></h6>
                                                <div class="product_price">${product.price}</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button"><button onClick={() => addItem(product.id)}>add to cart</button></div>
                                        </div>
                                    ))}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductList;