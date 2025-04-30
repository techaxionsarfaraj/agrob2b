<template>
  <div class="container">
    <!-- Logo -->
    <div class="footer-top mb30">
      <img
        src="https://kunvarjiagro.com/assets/images/logo/agro_commodities.svg"
        alt="Kunvarji Logo"
        class="footer-logo"
      />
    </div>

    <!-- Footer Content -->
    <div class="footer-content">
      <!-- Left Description & Social -->
      <div class="footer-column">
        <p class="footer-description">
          With over 60 years of expertise, Kunvarji Comtrade is a proud third-generation family
          enterprise—rooted in tradition, driven by innovation.
        </p>

        <div class="footer-social">
          <a href="#"><img src="#" alt="Facebook" /></a>
          <a href="#"><img src="#" alt="LinkedIn" /></a>
          <a href="#"><img src="#" alt="Twitter" /></a>
          <a href="#"><img src="#" alt="Instagram" /></a>
        </div>

        <p class="footer-copy">&copy; {{ currentYear }} Kunvarji Agro. All rights reserved.</p>
      </div>

      <!-- Services Links -->
      <nav class="footer-column">
        <h6 class="footer-heading">Services</h6>
        <a href="#" class="footer-link">Home</a>
        <a href="#" class="footer-link">About Us</a>
        <a href="#" class="footer-link">Manufacturing Excellence</a>
        <a href="#" class="footer-link">Logistics</a>
        <a href="#" class="footer-link">Testimonials</a>
        <a href="#" class="footer-link">Contact Us</a>
      </nav>

      <!-- Company Links -->
      <nav class="footer-column">
        <h6 class="footer-heading">Company</h6>
        <a href="#" class="footer-link">Home</a>
        <a href="#" class="footer-link">About Us</a>
        <a href="#" class="footer-link">Manufacturing Excellence</a>
        <a href="#" class="footer-link">Logistics</a>
        <a href="#" class="footer-link">Testimonials</a>
        <a href="#" class="footer-link">Contact Us</a>
      </nav>

      <!-- Utilities Links -->
      <nav class="footer-column">
        <h6 class="footer-heading">Utilities</h6>
        <a href="#" class="footer-link">Licenses</a>
        <a href="#" class="footer-link">Privacy policy</a>
        <a href="#" class="footer-link">Terms of services</a>
      </nav>
    </div>
  </div>

  <!-- Global Copyright -->
</template>

<script>
export default {
  name: 'OldFooter',
}
</script>

<style scoped>
.footer-logo {
  max-width: 200px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-column:first-child {
  max-width: 350px;
  width: 100%;
}
.footer-column:nth-child(2) {
  max-width: 300px;
  width: 100%;
}
.footer-column:nth-child(3) {
  max-width: 300px;
  width: 100%;
}
.footer-column:last-child {
  max-width: 200px;
  width: 100%;
}

.footer-description {
  margin-bottom: 20px;
  color: #333;
}

.footer-social a {
  margin-right: 10px;
}

.footer-copy {
  color: #555;
  margin-top: 15px;
}

.footer-heading {
  margin-bottom: 10px;
  color: #222;
}

.footer-link {
  display: block;
  font-size: 17px;
  margin-bottom: 10px;
  color: #444;
  text-decoration: none;
}

.footer-link:hover {
  color: var(--primary-color);
}

.footer-content .footer-column:not(:first-child) {
  padding-left: 40px;
}
@media (max-width: 1400px) {
  .footer-content .footer-column:not(:first-child) {
    padding-left: 0;
  }
  .footer-column:nth-child(2) {
    max-width: 250px;
  }
  .footer-column:nth-child(3) {
    max-width: 250px;
  }
}
</style>
