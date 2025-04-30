<template>
  <!-- <BannerSlider /> -->
  <Hero />
  <Stats />
  <Client />
  <ProductCategories />
  <CoatedPeanut />
  <FlavouredPeanut />
  <PeanutBar />
  <Process />
</template>
<script>
// import BannerSlider from '@/components/Home/BannerSlider.vue'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import Hero from '@/components/Home/Hero.vue'
import Stats from '@/components/Home/Stats.vue'
import Client from '@/components/Home/Client.vue'
import ProductCategories from '@/components/Home/ProductCategories.vue'
import FlavouredPeanut from '@/components/Home/FlavouredPeanut.vue'
import CoatedPeanut from '@/components/Home/CoatedPeanut.vue'
import PeanutBar from '@/components/Home/PeanutBar.vue'
import Process from '@/components/Home/Process.vue'
export default {
  name: 'Home',
  data() {
    return {
      message: 'Welcome to the Home Page!',
    }
  },
  components: {
    Hero,
    Stats,
    Client,
    ProductCategories,
    FlavouredPeanut,
    CoatedPeanut,
    PeanutBar,
    Process,
    // BannerSlider,
    // Swiper,
    // SwiperSlide,
  },
}
</script>
