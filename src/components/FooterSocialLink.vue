<template>
  <div class="footer-social-icon">
    <span>Follow Us</span>
    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
    <a href="#"><i class="fab fa-linkedin linkedin-bg"></i></a>
    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
    <a href="#"><i class="fab fa-instagram instagram-bg"></i></a>
  </div>
</template>
<script>
export default {
  name: 'FooterSocialLink',
}
</script>
<style>
.footer-social-icon span {
  display: block;
  font-size: 20px;
  color: var(--black);
  font-weight: 600;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: var(--white);
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
  
}
.facebook-bg {
  background: #3b5998;
}
.twitter-bg {
  background: #55acee;
}
.instagram-bg {
  background: #e4405f;
}
.linkedin-bg {
  background: #0077b5;
}
</style>
