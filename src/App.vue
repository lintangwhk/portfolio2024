<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="w-full h-full bg-black text-white relative">
    <Navbar class="p-6 sticky"></Navbar>
    <router-view />
    <Footer />
    <p class="flex justify-end pr-8">Lintang Wiranandha - 2024</p>
  </div>
</template>

<style scoped></style>
