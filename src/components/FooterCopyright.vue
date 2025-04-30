<template>
  <div class="copyright-area">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="copyright-text text-center">
          <p>Copyright &copy; {{ currentYear }}, All Right Reserved</p>
        </div>
        <div class="footer-menu">
          <ul>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">terms of services</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCopyright',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
@media (max-width: 640px) {
  .copyright-area .container > div {
    flex-direction: column;
    gap: 10px;
  }
}
.copyright-area {
  background: #f4fafd;
  padding: 25px 0;
  border-top: 1px solid #f1f1f1;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a {
  color: #ff5e14;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: var(--secondary); /*#ff5e14;*/
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
  text-transform: capitalize;
}
</style>
