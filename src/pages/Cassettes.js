import ProductList from '../ProductList';

const Cassettes = () => {
    return(
        <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="padding-top section_title new_arrivals_title">
              <h2>Cassettes </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
            
             <ProductList title="Cassette" />
 
            
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Cassettes;