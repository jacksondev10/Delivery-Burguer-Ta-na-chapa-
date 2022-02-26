<template>
<Banner />
  <div class="main-container">
    <h1>Monte seu hamburguer</h1>
  <BurgerForm />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import BurgerForm from '../components/BurgerForm'

export default{
  name: "Home",
  components: {
    Banner,
    BurgerForm
  }
}
</script>
