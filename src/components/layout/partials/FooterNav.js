import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
          <h1 className="mt-0 mb-12" style={{ color: 'orange' }}>
            CONTACT US
          </h1>  <br /> <br />
          <p className="m-0" style={{ color: 'white', textAlign: 'left' , fontSize:20}}>
          
          Mobile No :  &nbsp; 7802043155, &nbsp; 982441296 <br /> <br />
          Email : &nbsp; patelviraj908@gmail.com <br />
         <h6> Location :</h6>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7488.588289040296!2d73.1961483413662!3d22.249737164582402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc434423bd9df%3A0xe4252c050ca4b0d4!2sBhakti%20Nagar%2C%20Makarpura%2C%20Vadodara%2C%20Gujarat%20390010!5e0!3m2!1sen!2sin!4v1645249035418!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default FooterNav;