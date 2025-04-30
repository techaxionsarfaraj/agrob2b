<template>
  <div class="header">
    <div class="header_flex">
      <div class="header_left">
        <a href="/">
          <img
            src="https://kunvarjiagro.com/assets/images/logo/agro_commodities.svg"
            alt="logo"
            class="logo"
        /></a>
      </div>
      <div class="header_right d-flex gap_26">
        <button type="button" class="burger" id="burger">
          <span class="burger_line"></span>
          <span class="burger_line"></span>
          <span class="burger_line"></span>
        </button>
        <div class="overlay"></div>
        <nav class="dark_bg" id="menu">
          <div class="container">
            <a href="/"
              ><img
                src="https://kunvarjiagro.com/assets/images/logo/agro_commodities.svg"
                alt="logo"
                class="mobile_logo"
            /></a>
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
              <!-- <li>
                        <a class="has_sub_menu" href="javascript:void(0)">Calculators</a>
                        <ul class="sub_menu">
                           <li>
                              <a class="menu-link" href="javascript:void(0)">Tax calulator</a>
                           </li>
                           <li>
                              <a class="menu-link" href="javascript:void(0)">TDS calulator</a>
                           </li>
                        </ul>
                     </li> -->
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
              <li>
                <router-link :to="{ name: 'Store' }" active-class="active">Store</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<!-- Script -->
<script>
export default {
  name: 'Header',

  mounted() {
    const burgerButton = document.getElementById('burger')
    const menu = document.getElementById('menu')
    const overlay = document.querySelector('.overlay')

    if (burgerButton && menu && overlay) {
      burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle('active')
        overlay.classList.toggle('active')
        menu.classList.toggle('active')
      })

      overlay.addEventListener('click', function () {
        burgerButton.classList.remove('active')
        overlay.classList.remove('active')
        menu.classList.remove('active')
      })
    }

    // Dropdown
    const hasSubMenuElements = document.querySelectorAll('.has_sub_menu')
    const mainElement = document.querySelector('main')

    hasSubMenuElements.forEach((element) => {
      element.addEventListener('mouseover', function () {
        const otherSubMenus = document.querySelectorAll('.sub_menu:not(.active)')
        otherSubMenus.forEach((subMenu) => {
          subMenu.style.display = 'none'
        })
        const subMenu = this.nextElementSibling
        if (subMenu) subMenu.style.display = 'block'
      })
    })

    if (mainElement) {
      mainElement.addEventListener('mouseover', function () {
        const subMenus = document.querySelectorAll('.sub_menu')
        subMenus.forEach((subMenu) => {
          subMenu.style.display = 'none'
        })
      })
    }
  },
}
</script>
<!--Style-->
<style scoped>
.header {
  background-color: var(--white);
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding: 15px;
  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
.header_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.header_left {
  max-width: 180px;
  width: 100%;
}
.header_right {
  width: calc(100% - 180px);
  justify-content: center;
}
nav ul {
  padding: 0;
  list-style: none;
  display: flex;
  gap: 50px;
}
nav li a {
  text-decoration: none;
  color: var(--tertiary);
  display: inline-block;
  padding: 10px 0;
  font-size: 20px;

  line-height: 1.31;
  position: relative;
  transition: 0.3s;
}
nav li a:hover {
  opacity: 0.7;
}
nav li a.active {
  color: var(--secondary);
}
nav li:last-child a {
  color: var(--orange);
}

.burger {
  display: none;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.7);
  transition: all 0.35s ease-in-out;
}
@media (min-width: 1024px) {
  .mobile_logo {
    display: none;
  }
}
@media (max-width: 1399px) {
  nav ul {
    gap: 25px;
  }
  nav li a {
    font-size: 18px;
  }
}
@media (max-width: 1024px) {
  header {
    box-shadow: 0 4px 6px #0000001a;
  }
  .header_right {
    justify-content: flex-end;
  }
  .burger {
    display: flex;
    background-color: transparent;
    border: none;
    padding: 0;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
  }
  .burger.active {
    position: fixed;
    top: 35px;
    right: 20px;
    z-index: 9999;
  }
  .burger_line {
    width: 32px;
    height: 3px;
    background-color: #000;
    display: block;
    transition: 0.3s;
  }
  .burger.active .burger_line {
    background-color: var(--white);
    z-index: 9999;
  }
  .burger.active .burger_line:nth-child(1) {
    transform: translateY(9px) rotate(-45deg);
  }
  .burger.active .burger_line:nth-child(2) {
    opacity: 0;
  }
  .burger.active .burger_line:nth-child(3) {
    transform: translateY(-9px) rotate(45deg);
  }
  nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 60vw;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 999;
  }
  nav.active {
    transform: translateX(0);
  }
  .overlay.active {
    display: block;
    opacity: 1;
    visibility: visible;
  }
  nav.dark_bg.active {
    background-color: var(--black);
  }
  nav.dark_bg.active :not(:last-child) a {
    color: var(--white);
  }
  nav ul {
    flex-direction: column;
    gap: 16px;
    padding: 12px 30px;
  }
  .mobile_logo {
    max-width: 170px;
    width: 100%;
    margin-top: 50px;
  }
}

@media (max-width: 767px) {
  .logo {
    width: 140px;
  }
}

/* dropdown start */
.has_sub_menu {
  position: relative;
  padding-right: 20px;
}
.has_sub_menu::after {
  content: '';
  position: absolute;
  right: 0;
  top: 3px;
  bottom: 0;
  margin: auto;
  background-image: url(https://sudip-bhowmick.github.io/images/img/dropdown.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
}
.sub_menu {
  display: none;
  background-color: var(--primary);
  position: absolute;
  left: 0;
  top: 42px;
  flex-direction: column;
  gap: 0;
  padding: 8px 20px;
  white-space: nowrap;
  border-radius: 0px 0px 8px 8px;
}
.sub_menu.show {
  display: flex;
}
@media (max-width: 1024px) {
  .sub_menu {
    position: relative;
    top: 0;
  }
}
/* dropdown end */
</style>
