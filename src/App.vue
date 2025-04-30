<template>
  <Teleport to="#header">
    <Header />
  </Teleport>

  <router-view> </router-view>

  <Teleport to="footer">
    <Footer />
  </Teleport>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>
