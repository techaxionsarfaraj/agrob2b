<template>
  <section class="hero-section position-relative">
    <div class="container">
      <div class="d-flex justify-content-between z-index-1 position-relative">
        <div class="hero-content">
          <h1>Peanut perfection with</h1>
          <h2>PRECISION, QUALITY, AND SUSTAINABILITY!</h2>
          <p>
            Trusted <strong>Peanut Product</strong> Manufacturing Partner for
            <strong>60+ Years</strong>
          </p>
          <div class="button-group">
            <a href="#" class="btn-quote">Request a Quote</a>
            <a href="#" class="btn-brochure">Download Brochure</a>
          </div>
        </div>
        <div class="hero-image">
          <img
            src="https://kunvarjiagro.com/assets/images/header/header.png"
            alt="Kunvarji Factory"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style>
.hero-section {
  background: url('https://kunvarjiagro.com/assets/images/header/header.png') no-repeat center
    center;
  background-size: cover;
  padding: 80px 0 220px;
}
.hero-section:before {
  content: '';
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
.hero-content {
  max-width: 50%;
}
.hero-content h1 {
  font-size: 2.8em;
  margin: 0;
  color: var(--primary);
}
.hero-content h2 {
  font-size: 2.4em;
  margin: 10px 0;
  color: var(--secondary);
  font-weight: bold;
}
.hero-content p {
  font-size: 1rem;
  margin: 15px 0;
}

.button-group {
  margin-top: 30px;
}
.button-group a {
  padding: 14px 25px;
  border-radius: 8px;
  font-size: 1rem;
  text-decoration: none;
  margin-right: 15px;
  display: inline-block;
}
.btn-quote {
  background-color: var(--secondary);
  color: var(--white);
}
.btn-brochure {
  background-color: #333;
  color: white;
}
.hero-image {
  max-width: 45%;
  border: 8px solid white;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.hero-image img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

@media screen and (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
  .hero-content,
  .hero-image {
    max-width: 100%;
  }
  .button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-group a {
    margin-bottom: 15px;
    width: 80%;
  }
}
</style>
