<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { store } from '@/stores/store'
console.log('selected store', store.selectedSupport)
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="store.selectedSupport" to="/c-support">C Support</RouterLink>
        <RouterLink v-if="store.selectedSupport" to="/b-support">B Support</RouterLink>
        <RouterLink v-if="store.selectedSupport" to="/a-support">A Support</RouterLink>
        <RouterLink v-if="store.selectedSupport" to="/a-plus-support">A+ Support</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
}

header {
  display: flex;
  place-items: center;
  justify-content: center;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 1rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 500px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 0.5rem;

    padding: 1rem 0;
  }
}
</style>
