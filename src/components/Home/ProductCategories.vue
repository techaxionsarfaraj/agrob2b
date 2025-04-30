<template>
  <section class="product-section">
    <div class="container">
      <div class="heading">
        <hr class="line" />
        <h2>PRODUCTS CATAGORIES</h2>
        <hr class="line" />
      </div>
      <p class="section-subtitle">
        Our products are made with common sense and high-quality ingredients. From naturally
        delicious nut butters to organic treats, we work to craft the best tasting products. We
        think your taste buds will agree!
      </p>
    </div>

    <div class="container">
      <div class="position-relative boxes">
        <!-- Left Side -->
        <div class="left-box">
          <h2>Peanut Butter</h2>
          <p>
            Don’t compromise taste for Performance! Peanut butter is packed with all of your
            functional needs and tastes great.
          </p>

          <div class="variants">
            <strong>Other Variants</strong>
            <button
              v-for="variant in variants"
              :key="variant.name"
              :class="{ active: variant.name === selectedVariant.name }"
              :disabled="variant.disabled"
              @click="selectVariant(variant)"
            >
              {{ variant.name }}
            </button>
          </div>

          <div class="cta-buttons">
            <button class="explore-btn">Explore Products</button>
            <button class="quote-btn">Get a Quote Now</button>
          </div>
        </div>

        <!-- Right Side -->
        <div class="right-box">
          <img :src="selectedVariant.image" :alt="selectedVariant.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductCategories',
  data() {
    return {
      variants: [
        {
          name: 'Natural',
          image: 'https://kunvarjiagro.com/assets/images/header/header.png',
        },
        {
          name: 'Crunchy',
          image: 'https://kunvarjiagro.com/assets/images/international_business.png?text=Crunchy',
        },
        {
          name: 'Flavored',
          image: 'https://kunvarjiagro.com/assets/images/institutional_%20supply.jpg?text=Flavored',
        },
        {
          name: 'Protein-Enriched',
          image: 'https://kunvarjiagro.com/assets/images/plants/chilli.png',
        },
        {
          name: 'Chocolate',
          image: '',
          disabled: true,
        },
      ],
      selectedVariant: {
        name: 'Natural',
        image: 'https://kunvarjiagro.com/assets/images/header/header.png',
      },
    }
  },
  methods: {
    selectVariant(variant) {
      if (!variant.disabled) {
        this.selectedVariant = variant
      }
    },
  },
}
</script>
<style scoped>
.product-section {
  margin-top: 50px;
}
.boxes {
  display: flex;
  position: relative;
}

.left-box {
  width: 50%;
  padding: 40px 0;
  z-index: 2;
  position: relative;
}

.right-box {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50vw;
  height: 100%;
  background: #cceeff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.right-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Optional: keep right-box content aligned */
.right-box-inner {
  max-width: 600px;
  padding: 40px;
  color: #000;
}

@media (max-width: 768px) {
  .boxes {
    flex-direction: column;
  }
  .right-box {
    position: static;
    width: 100%;
  }
  .left-box {
    width: 100%;
  }
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  max-width: 800px;
  margin: 10px auto 40px;
  color: #666;
  line-height: 1.6;
}

.variants {
  margin-bottom: 25px;
}

.variants strong {
  display: block;
  margin-bottom: 10px;
  color: #004875;
  font-weight: bold;
}

.variants button {
  padding: 8px 16px;
  margin: 5px 5px 0 0;
  border: 1px solid #ccc;
  background: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.variants button.active {
  background: #004875;
  color: #fff;
  border-color: #004875;
}

.variants button:disabled {
  background: #e0e0e0;
  cursor: not-allowed;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.cta-buttons button {
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.explore-btn {
  background: #004875;
  color: white;
  border: none;
}

.quote-btn {
  background: white;
  color: #004875;
  border: 2px solid #004875;
}
</style>
