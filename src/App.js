import React from 'react';
class App extends React.Component {
  
  render() {
   
    return (
    
      <div className="MainDiv">
     
        <header class="header trans_300">
         
          <div class="top_nav">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="top_nav_left">free shipping on all u.s orders over $50</div>
                </div>
                <div class="col-md-6 text-right">
                  <div class="top_nav_right">
                    <ul class="top_nav_menu">
                    
                      <li class="language">
                        <a href="#">
                          English
                          <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="language_selection">
                          <li><a href="#">Français</a></li>
                        </ul>
                      </li>
                      <li class="account">
                        <a href="#">
                          My Account
                          <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="account_selection">
                          <li><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                          <li><a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div class="main_nav_container">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-right">
                  <div class="logo_container">
                    <a href="#">L'Apostrophe</a>
                  </div>
                  <nav class="navbar">
                    <ul class="navbar_menu">
                      <li><a href="/vinyls">vinyls</a></li>
                      <li><a href="/cassettes">cassettes</a></li>
                      <li><a href="/events">events</a></li>
                      <li><a href="/merchandise">merchandise</a></li>
                      <li><a href="/contact">contact</a></li>
                    </ul>
                    <ul class="navbar_user">
                      <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                      <li class="checkout">
                        <a href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                          <span id="checkout_items" class="checkout_items">2</span>
                        </a>
                      </li>
                    </ul>
                    <div class="hamburger_container">
                      <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="fs_menu_overlay"></div>
        <div class="hamburger_menu">
          <div class="hamburger_close"><i class="fa fa-times" aria-hidden="true"></i></div>
          <div class="hamburger_menu_content text-right">
            <ul class="menu_top_nav">
              <li class="menu_item has-children">
                <a href="#">
                  English
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="menu_selection">
                  <li><a href="#">Français</a></li>
                </ul>
              </li>
              <li class="menu_item has-children">
                <a href="#">
                  My Account
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="menu_selection">
                  <li><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign In</a></li>
                  <li><a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i> Register</a></li>
                </ul>
              </li>
              <li class="menu_item"><a href="#">home</a></li>
              <li class="menu_item"><a href="#">shop</a></li>
              <li class="menu_item"><a href="#">promotion</a></li>
              <li class="menu_item"><a href="#">pages</a></li>
              <li class="menu_item"><a href="#">contact</a></li>
            </ul>
          </div>
        </div>
      
        <div class="main_slider" style={{backgroundImage:"url(assets/images/slider_1.jpg)"}}>
          <div class="container fill_height">
            <div class="row align-items-center fill_height">
              <div class="col">
                <div class="main_slider_content">
                  <h6>Spring / Summer Collection 2021</h6>
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
            <div class="row align-items-center">
              <div class="col text-center">
                <div class="new_arrivals_sorting">
                  <ul class="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                    <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">vinyls</li>
                    <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">cassettes</li>
                    <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">merch</li>
                  </ul>
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
                      <div class="favorite favorite_left"></div>
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
                      <div class="favorite"></div>
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
                      <div class="favorite"></div>
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
                      <div class="favorite favorite_left"></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                        <div class="product_price">$410.00</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
               
                  <div class="product-item women men">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_5.png" alt="" />
                      </div>
                      <div class="favorite"></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Pryma Headphones, Rose Gold & Grey</a></h6>
                        <div class="product_price">$180.00</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
              
                  <div class="product-item accessories">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_6.png" alt="" />
                      </div>
                      <div class="favorite favorite_left"></div>
                      <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="##">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                        <div class="product_price">$520.00<span>$590.00</span></div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                
                  <div class="product-item women">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_7.png" alt="" />
                      </div>
                      <div class="favorite"></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                        <div class="product_price">$610.00</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
                
                  <div class="product-item accessories">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_8.png" alt="" />
                      </div>
                      <div class="favorite"></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Blue Yeti USB Microphone Blackout Edition</a></h6>
                        <div class="product_price">$120.00</div>
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
                      <div class="favorite favorite_left"></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                        <div class="product_price">$410.00</div>
                      </div>
                    </div>
                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                  </div>
               
                  <div class="product-item men">
                    <div class="product product_filter">
                      <div class="product_image">
                        <img src="assets/images/product_10.png" alt="" />
                      </div>
                      <div class="favorite"></div>
                      <div class="product_info">
                        <h6 class="product_name"><a href="#">Pryma Headphones, Rose Gold & Grey</a></h6>
                        <div class="product_price">$180.00</div>
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
                    <h2>Deal Of The Week</h2>
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
                    <p>Suffered Alteration in Some Form</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon"><i class="fa fa-money" aria-hidden="true"></i></div>
                  <div class="benefit_content">
                    <h6>cach on delivery</h6>
                    <p>The Internet Tend To Repeat</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon"><i class="fa fa-undo" aria-hidden="true"></i></div>
                  <div class="benefit_content">
                    <h6>45 days return</h6>
                    <p>Making it Look Like Readable</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                  <div class="benefit_content">
                    <h6>opening all week</h6>
                    <p>8AM - 09PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div class="blogs">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title">
                  <h2>Latest Blogs</h2>
                </div>
              </div>
            </div>
            <div class="row blogs_container">
              <div class="col-lg-4 blog_item_col">
                <div class="blog_item">
                  <div class="blog_background" style={{backgroundImage:"url(assets/images/blog_1.jpg)"}}></div>
                  <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 class="blog_title">Here are the trends I see coming this fall</h4>
                    <span class="blog_meta">by admin | dec 01, 2021</span>
                    <a class="blog_more" href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 blog_item_col">
                <div class="blog_item">
                  <div class="blog_background" style={{backgroundImage:"url(assets/images/blog_2.jpg)"}}></div>
                  <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 class="blog_title">Here are the trends I see coming this fall</h4>
                    <span class="blog_meta">by admin | dec 01, 2021</span>
                    <a class="blog_more" href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 blog_item_col">
                <div class="blog_item">
                  <div class="blog_background" style={{backgroundImage:"url(assets/images/blog_3.jpg)"}}></div>
                  <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 class="blog_title">Here are the trends I see coming this fall</h4>
                    <span class="blog_meta">by admin | dec 01, 2021</span>
                    <a class="blog_more" href="#">Read more</a>
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
                    <li><a href="#">Blog</a></li>
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
                  <div class="cr">©2021 All Rights Reserverd. Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="#">Jassa</a> &amp; Loved by <a href="https://therichpost.com">Jassa</a></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
)
};
}
export default App;