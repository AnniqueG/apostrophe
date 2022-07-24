import {Link} from 'react-router-dom';

const Navbar = () => {
    
  return ( 

        <header class="header trans_300" >
        <div class="main_nav_container" >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-right">
              <div class="logo_container">
                <a href="#">L'Apostrophe</a>
              </div>
              <nav class="navbar">
                <ul class="navbar_menu">
                  <li><Link to="/vinyls">Vinyls</Link></li>                  
                  <li><Link to="/cassettes">Cassettes</Link></li>
                  <li><Link to="/merch">Merchandise</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/contact">Contact us</Link></li>

                </ul>
                <ul class="navbar_user">
                  <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                  <li class="checkout">
                    <a href="#">
                     <Link to="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
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
              <li><Link to="/register"><i class="fa fa-user-plus" aria-hidden="true"></i> Register</Link></li>
            </ul>
          </li>
          <li class="menu_item"><a href="#">home</a></li>
          <li class="menu_item"><Link to="/vinyls">Vinyls</Link></li>
          <li class="menu_item"><Link to="/cassettes">Cassettes</Link></li>
          <li class="menu_item"><Link to="/merch">Merchandise</Link></li>
          <li class="menu_item"><Link to="/contact">Contact us</Link></li>
        </ul>
      </div>
    </div>
    </header>
    );

}
export default Navbar;