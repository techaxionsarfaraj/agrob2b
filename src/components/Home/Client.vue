<template>
  <section class="clients-section">
    <div class="container">
      <div class="heading">
        <hr class="line" />
        <h2>WHO WE WORK WITH</h2>
        <hr class="line" />
      </div>
      <p class="description">
        From multinational food brands to emerging private labels, we proudly serve clients who
        demand consistency, innovation,<br />
        and excellence in every peanut product.
      </p>

      <div class="client-logos">
        <div class="client-box">
          <img
            src="https://images.seeklogo.com/logo-png/42/1/haldiram-nagpur-logo-png_seeklogo-425265.png"
            alt="Haldiram's"
          />
        </div>
        <div class="client-box">
          <img
            src="https://w7.pngwing.com/pngs/40/945/png-transparent-itc-limited-company-business-conglomerate-business-thumbnail.png"
            alt="ITC Limited"
          />
        </div>
        <div class="client-box">
          <img
            src="https://images.seeklogo.com/logo-png/52/1/balaji-wafers-logo-png_seeklogo-523953.png"
            alt="Balaji Wafers"
          />
        </div>
        <div class="client-box">
          <img
            src="https://pngsource.in/assets/thumbnails/Parle-Products-Logo-Pngsource-ZFA5RWLD.png"
            alt="Parle"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Client',
}
</script>

<style>
.clients-section {
  background-color: #e9f9ef;
  text-align: center;
  padding: 180px 20px 60px;
  margin-top: -90px;
}

.heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.heading .line {
  flex: 1;
  height: 2px;
  background: var(--tertiary);
}

.heading h2 {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.description {
  color: #444;
  font-size: 1rem;
  margin-bottom: 40px;
}

.client-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.client-box {
  flex: 0 1 260px;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  transition: transform 0.3s ease;
}

.client-box:hover {
  transform: scale(1.05);
}

.client-box img {
  max-width: 60%;
  max-height: 150px;
  object-fit: contain;
}
</style>
