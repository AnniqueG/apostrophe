import cart from "./App";
const ProductList = ({title, products}) => {
    return ( 
        
        <div class="new_arrivals">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="section_title new_arrivals_title">
                            <h2>{title}</h2>
                        </div>
                    </div>

                    <div class="row align-items-center"></div>
                    <div class="col text-center">
                        <div class="row">
                            <div class="col">
                                <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
                                
                                    {products.filter(criteria => criteria.format = {title}).map(product => (
                                        <div class="product-item accessories">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                <img src={product.picture} alt="" />
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_info">
                                                <h6 class="product_name"><a href="#"> {product.name} <br /> {product.artist})</a></h6>
                                                <div class="product_price">{product.price}</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button"><button onClick={() => cart.add(product.id)}>add to cart</button></div>
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