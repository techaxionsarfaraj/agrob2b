<template>
  <section class="stats-section">
    <div class="container">
      <div class="d-flex justify-content-between z-index-1 position-relative bg-primary" id="stats">
        <div class="stat-box">
          <i class="fas fa-business-time"></i>
          <div class="stat-number">60+</div>
          <div class="stat-text">Years in Business</div>
        </div>

        <div class="stat-box">
          <i class="fas fa-industry"></i>
          <div class="stat-number">10+ SKUs</div>
          <div class="stat-text">Manufactured</div>
        </div>

        <div class="stat-box">
          <i class="fas fa-globe"></i>
          <div class="stat-number">10+ Global &</div>
          <div class="stat-text">Indian Brands Served</div>
        </div>

        <div class="stat-box">
          <i class="fas fa-tags"></i>
          <div class="stat-number">100%</div>
          <div class="stat-text">Customisable<br />Private Label Solutions</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Stats',
}
</script>

<style>
.stats-section .container > div {
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
}

#stats {
  margin-top: -100px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.stat-box {
  flex: 1;
  color: var(--white);
  min-width: 200px;
  text-align: center;
  padding: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
}

.stat-box:last-child {
  border-right: none;
}

.stat-box i {
  font-size: 3rem;
  margin-bottom: 10px;
  color: #cbeaf3;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
}

.stat-text {
  font-size: 1rem;
  margin-top: 5px;
  color: #e6e6e6;
}

/* Tablet view (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  #stats {
    flex-wrap: wrap;
  }

  .stat-box {
    flex: 0 0 50%; /* 2 columns */
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Remove right border from the 2nd item in each row */
  .stat-box:nth-child(2n) {
    border-right: none;
  }

  /* Remove bottom border from the last row items */
  .stat-box:nth-child(3),
  .stat-box:nth-child(4) {
    border-bottom: none;
  }
}

/* Mobile view (≤768px) */
@media (max-width: 768px) {
  #stats {
    flex-direction: column;
    align-items: center;
  }

  .stat-box {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .stat-box:last-child {
    border-bottom: none;
  }
}
</style>
