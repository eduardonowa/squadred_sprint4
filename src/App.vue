<template>
  <div id="app">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Nunito&display=swap");
html,
body {
  height: 89vh;
  flex: 1;
  background-color: #e5e5e5;
  @media (max-width: 768px) {
    background-color: white;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: #767676;
  -webkit-box-shadow: none;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
