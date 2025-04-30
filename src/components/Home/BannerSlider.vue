<template>
  <swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="false"
    pagination
    navigation
    class="banner-swiper"
  >
    <swiper-slide v-for="(banner, index) in banners" :key="index">
      <img :src="banner.image" :alt="banner.title" class="w-full" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const banners = [
  {
    title: 'Banner 1',
    image: 'https://kunvarjiagro.com/assets/images/header/header.png',
  },
  { title: 'Banner 2', image: 'https://kunvarjiagro.com/assets/images/header/header.png' },
  {
    title: 'Banner 3',
    image: 'https://kunvarjiagro.com/assets/images/header/header.png',
  },
]
</script>

<style scoped>
.banner-swiper {
  width: 100%;
}
</style>
