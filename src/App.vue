<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>

<style>
body {
  font-family: "Montserrat-Black", sans-serif;
  font-size: 14px;
  line-height: 2;
}

/* Headings */

h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
}

h4,
h5,
h6 {
  font-family: "Ubuntu";
}

h1 {
  font-size: 3rem;
  line-height: 1.5;
}

h2 {
  font-size: 2.2rem;
  line-height: 1.5;
}

h3 {
  font-size: 1.5rem;
}

p {
  /* color: #8f8f8f; */
  color: white;
}

.container-fluid {
  padding: 3% 13% 2%;
}

hr {
  border-style: none;
  border-top-style: dotted;
  border-color: #ddeeee;
  border-width: 6px;
  width: 10%;
  margin: 10px auto;
}
</style>
