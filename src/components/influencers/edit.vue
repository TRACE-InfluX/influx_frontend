<template>
  <form>
    <p>
      <label for="name">Name</label>
      <input
        id="name"
        v-model="name"
        type="text"
        name="name"
      >
    </p>
    <p>
      <input
        type="submit"
        value="submit"
      >
    </p>
  </form>
</template>

<script>
import API from 'axios'

export default {
  name:"influencer-form"

}
</script>

<style lang="scss" scoped>
  li {
    width: 300px;
    display: inline-block;
  }
</style>
