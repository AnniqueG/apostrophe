import {useEffect, useState} from 'react';
import ProductList from '../ProductList';
import React, {Component} from 'react';


const Home = () => {


    return(
        <div className="MainDiv">
        <div class="main_slider" style={{backgroundImage:"url(assets/images/slider_1.jpg)"}}>
          <div class="container fill_height">
            <div class="row align-items-center fill_height">
              <div class="col">
                <div class="main_slider_content">
                  <h1>Get up to 30% Off New Arrivals</h1>
                  <div class="red_button shop_now_button"><a href="#">shop now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div class="new_arrivals">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title new_arrivals_title">
                  <h2>Hot Items</h2>
                </div>
              </div>
            </div>
            
            <div class="row">
              <div class="col">
                <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
                
                  <div class="product-item men">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_1.png" alt="" />
                      </div>
  
                      <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">OK Computer <br /> Radiohead (Vinyl 2LP)</a></h6>
                        <div class="product_price">$35.00<span>$55.00</span></div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                 
                  <div class="product-item women">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_2.png" alt="" />
                      </div>

                      <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Electric Ladyland <br /> Jimi Hendrix (Vinyl 2LP)</a></h6>
                        <div class="product_price">$84.99</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                 
                  <div class="product-item women">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_3.png" alt="" />
                      </div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Endtroducing..... <br /> DJ Shadow (Vinyl 2LP)</a></h6>
                        <div class="product_price">$120.00</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
               
                  <div class="product-item accessories">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_4.png" alt="" />
                      </div>
                      <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Happier Than Ever <br /> Billie Eilish (Cassette)</a></h6>
                        <div class="product_price">$20.00<span>35.00</span></div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
               
                  <div class="product-item women men">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_5.png" alt="" />
                      </div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">K.I.D.S. <br/> Mac Miller (Cassette)</a></h6>
                        <div class="product_price">$24.59</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
              
                  <div class="product-item accessories">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_6.png" alt="" />
                      </div>
                      <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$5</span></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="##">Nevermind <br /> Nirvana (Cassette)</a></h6>
                        <div class="product_price">$25.99<span>$30.99</span></div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                
                  <div class="product-item women">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_7.png" alt="" />
                      </div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">The Black Album <br /> Metallica (Cassette)</a></h6>
                        <div class="product_price">$10.00</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                
                  <div class="product-item accessories">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_8.png" alt="" />
                      </div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Wanted Dead or Alive <br/> Bon Jovi (Shirt)</a></h6>
                        <div class="product_price">$20.00</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                
                  <div class="product-item men">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_9.png" alt="" />
                      </div>
                      <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
        
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Official Logo <br/> Duran Duran (Shirt)</a></h6>
                        <div class="product_price">$25.00 <span>$27.99</span></div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
               
                  <div class="product-item men">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_10.png" alt="" />
                      </div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Make It Big <br /> Wham! (Shirt)</a></h6>
                        <div class="product_price">$29.69</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div class="deal_ofthe_week">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="deal_ofthe_week_img">
                  <img src="assets/images/deal_ofthe_week.png" alt="" />
                </div>
              </div>
              <div class="col-lg-6 text-right deal_ofthe_week_col">
                <div class="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                  <div class="section_title">
                    <h2>Events Of The Week</h2>
                  </div>
                  
                  <div class="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      
        <div class="benefit">
          <div class="container">
            <div class="row benefit_row">
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon"><i class="fa fa-truck" aria-hidden="true"></i></div>
                  <div class="benefit_content">
                    <h6>free shipping</h6>
                    <p>On all domestic orders over $50 (before tax)</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon"><i class="fa fa-undo" aria-hidden="true"></i></div>
                  <div class="benefit_content">
                    <h6>45 days for free returns</h6>
                    <p>Cost of shipping not included</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
     
      
        <div class="newsletter">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                  <h4>Newsletter</h4>
                  <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                </div>
              </div>
              <div class="col-lg-6">
                <form action="post">
                  <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                    <input id="newsletter_email" type="email" placeholder="Your email" required="required" data-error="Valid email is required." />
                    <button id="newsletter_submit" type="submit" class="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                  <ul class="footer_nav">
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="footer_nav_container">
                  <div class="cr">©2022 All Rights Reserverd</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

export default Home;