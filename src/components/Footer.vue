<template>
  <div class="footer-section">
    <div class="container">
      <!-- <div class="footer-cta d-flex align-items-center">
        <div class="card mb-30">
          <div class="single-cta">
            <i class="fas fa-map-marker-alt"></i>
            <div class="cta-text">
              <h4>Find us</h4>
              <span>1010 Avenue, sw 54321, chandigarh</span>
            </div>
          </div>
        </div>
        <div class="card mb-30">
          <div class="single-cta">
            <i class="fas fa-phone"></i>
            <div class="cta-text">
              <h4>Call us</h4>
              <span>9876543210 0</span>
            </div>
          </div>
        </div>
        <div class="card mb-30">
          <div class="single-cta">
            <i class="far fa-envelope-open"></i>
            <div class="cta-text">
              <h4>Mail us</h4>
              <span>mail@info.com</span>
            </div>
          </div>
        </div>
      </div> -->
      <div class="footer-cta d-flex align-items-center">
        <div class="footer-logo">
          <a href="/"
            ><img
              src="https://kunvarjiagro.com/assets/images/logo/agro_commodities.svg"
              class="img-fluid"
              alt="logo"
          /></a>
        </div>
      </div>
      <div class="mb30 mobile-view">
        <div class="footer-widget">
          <div class="footer-text">
            <p>
              With over 60 years of expertise, Kunvarji Comtrade is a proud third-generation family
              enterprise—rooted in tradition, driven by innovation.
            </p>
          </div>
          <FooterSocialLink />
        </div>
      </div>
      <div class="footer-content d-flex align-items-start justify-content-center">
        <div class="card mb30 desktop-view">
          <div class="footer-widget">
            <div class="footer-text">
              <p>
                With over 60 years of expertise, Kunvarji Comtrade is a proud third-generation
                family enterprise—rooted in tradition, driven by innovation.
              </p>
            </div>
            <FooterSocialLink />
          </div>
        </div>
        <div class="card mb30">
          <div class="footer-widget">
            <div class="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li><router-link :to="{ name: 'Home' }" active-class="active">Home</router-link></li>
              <li>
                <router-link :to="{ name: 'About' }" active-class="active">About Us</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'ManufacturingExcellence' }" active-class="active"
                  >Manufacturing Excellence</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Logistics' }" active-class="active"
                  >Logistics</router-link
                >
              </li>

              <li>
                <router-link :to="{ name: 'Testimonials' }" active-class="active"
                  >Testimonials</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Contact' }" active-class="active"
                  >Contact Us</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="card mb30">
          <div class="footer-widget">
            <div class="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div class="footer-text mb-25">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div class="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" name="email" />
                <button type="submit" class="subscribe">
                  <i class="fab fa-telegram-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterCopyright />
  </div>
</template>

<script>
import FooterSocialLink from './FooterSocialLink.vue'
import FooterCopyright from './FooterCopyright.vue'
export default {
  name: 'Footer',
  components: {
    FooterSocialLink,
    FooterCopyright,
  },
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .mobile-view {
    display: none;
  }
  .desktop-view {
    display: block;
  }
  .footer-content {
    padding: 50px 0 0 0;
  }
  .footer-content .card {
    width: calc(38% - 20px);
    padding: 0 20px;
  }
  .footer-content .card:first-child {
    width: calc(33.33% - 20px);
    padding-left: 0;
    padding-right: 60px;
  }
  .footer-content .card:last-child {
    width: calc(33.33% - 20px);
    padding-right: 0;
    padding-left: 20px;
  }
}
@media (max-width: 1023.9px) {
  .mobile-view {
    display: block;
  }
  .desktop-view {
    display: none;
  }
  .footer-logo {
    margin-bottom: 30px;
  }
  .footer-content .card:first-child {
    width: 100%;
    padding-right: 0;
  }
  .footer-content {
    margin-top: 30px;
    flex-wrap: wrap;
  }
  .footer-content .card {
    width: 50%;
    padding: 0;
  }
}
@media (max-width: 640px) {
  .footer-content .card {
    width: 100%;
  }
}

.footer-section {
  background: #f4fafd;
  /*position: relative;
  z-index: -1;*/
}
/*
.single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}*/
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  padding-top: 50px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 18px;
  font-family: system-ui;
}

/* .footer-widget ul {
  column-count: 2;
} */

.footer-widget-heading h3 {
  color: var(--black);
  font-size: 20px;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: var(--secondary); /*#ff5e14;*/
}
.footer-widget ul li {
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: var(--secondary); /*#ff5e14;*/
}
.footer-widget ul li a {
  color: var(--black);
  text-transform: capitalize;
  font-size: 18px;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: calc(100% - 40px);
  padding: 13px;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
  transition: 0.3s ease-in-out;
}
.subscribe-form input:focus {
  outline: none;
  border-color: var(--secondary); /*#ff5e14;*/
  transition:
    0.3s ease-in-out,
    border-color 0.3s;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: var(--secondary); /*#ff5e14;*/
  padding: 10px 20px;
  border: 1px solid var(--secondary); /*#ff5e14;*/
  top: 0;
  cursor: pointer;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
</style>
