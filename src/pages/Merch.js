import ProductList from '../ProductList';

const Merchs = () => {
    return(
        <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="padding-top section_title new_arrivals_title">
              <h2>Merchandise </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
            
             <ProductList title="Merch" />
 
            
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Merchs;