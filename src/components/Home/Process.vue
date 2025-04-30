<template>
  <div class="container">
    <div class="heading">
      <hr class="line" />
      <h2>Our Process</h2>
      <hr class="line" />
    </div>
  </div>
  <div class="process-section">
    <div class="process-grid">
      <div class="process-box">
        <i class="fas fa-comments"></i>
        <div>
          <h4>Bespoke Consultation</h4>
          <p>Your vision, our foundation—tailored to elevate your brand</p>
        </div>
      </div>

      <div class="process-box">
        <i class="fas fa-vials"></i>
        <div>
          <h4>Sampling & R&D</h4>
          <p>Exclusive formulations crafted with precision and care.</p>
        </div>
      </div>

      <div class="process-box">
        <i class="fas fa-box-open"></i>
        <div>
          <h4>Packaging & Design</h4>
          <p>Elegant, compliant, and custom-fit to your product identity.</p>
        </div>
      </div>

      <div class="process-box">
        <i class="fas fa-industry"></i>
        <div>
          <h4>Manufacturing Excellence</h4>
          <p>Produced in modern facilities with premium-grade precision.</p>
        </div>
      </div>

      <div class="process-box">
        <i class="fas fa-check-circle"></i>
        <div>
          <h4>Quality Control</h4>
          <p>Strict testing ensures every batch meets elite standards.</p>
        </div>
      </div>

      <div class="process-box">
        <i class="fas fa-truck"></i>
        <div>
          <h4>Seamless Dispatch</h4>
          <p>Carefully packed and delivered to impress.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
}
</script>

<style>
.process-section {
  text-align: center;
}

.process-section h2 {
  color: #004a6e;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: inline-block;
  margin-bottom: 40px;
}

.process-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}

.process-box {
  border: 1px solid #004a6e;
  border-radius: 10px;
  flex: 0 0 48%;
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.process-box i {
  font-size: 30px;
  color: #004a6e;
  min-width: 30px;
}

.process-box h4 {
  margin: 0 0 5px;
  color: #004a6e;
}

.process-box p {
  margin: 0;
  color: #333;
}

@media (max-width: 768px) {
  .process-box {
    flex: 0 0 100%;
  }
}
</style>
