<template>
    <div id="admin-app" class="index">
      <nav>
        <a href="/">AppHome</a>
        <router-link to="/">Home</router-link>
        <router-link to="/demo">Demo</router-link>
      </nav>
        <div>
          <header>Admin-Header</header>
          <router-view></router-view>
          <footer>Admin-Footer</footer>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "admin-app"
};
</script>

<style scoped>
.index {
  color: green;
}
</style>