<template>
  <div id="footer">
    <i class="fab fa-twitter footer-icons"></i>
    <i class="fab fa-facebook footer-icons"></i>
    <i class="fab fa-instagram footer-icons"></i>
    <i class="fas fa-envelope footer-icons"></i>
    <p>&copy; Designed by Karishma Solanki</p>
  </div>
</template>

<script>
export default {
  name: "main-footer"
};
</script>

<style scoped>
#footer {
  background-color: #00909e;
  text-align: center;
  padding: 7% 10%;
  color: white;
}

.footer-icons {
  margin: 10px 15px;
}

.footer-icons:hover {
  color: #95f6ff;
}
</style>
