<template>
  <div class="container">
    <div class="position-relative two-boxes">
      <!-- Left Side (Image now) -->
      <div class="left-side">
        <img :src="selectedVariant.image" :alt="selectedVariant.name" />
      </div>

      <!-- Right Side (Text Content now) -->
      <div class="right-side">
        <h2>Peanut Bar</h2>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoatedPeanut',
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
<style>
.two-boxes {
  display: flex;
  position: relative;
  flex-direction: row-reverse; /* Reverses the order */
}

.left-side {
  position: absolute;
  top: 0;
  right: 50%;
  width: 50vw;
  height: 100%;
  background: #cceeff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.left-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-side {
  width: 50%;
  padding: 40px 0;
  z-index: 2;
  position: relative;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .two-boxes {
    flex-direction: column;
  }

  .left-side {
    position: static;
    width: 100%;
    height: auto;
  }

  .right-side {
    width: 100%;
  }
}
</style>
