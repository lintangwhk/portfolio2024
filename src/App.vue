<script setup>
import Navbar from './components/Navbar.vue'
import Button from 'primevue/button';
import Form from './components/Form.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar class="p-6"></Navbar>
  <div class="my-6 w-full h-[640px]">
    <section>
      <iframe class="w-full h-[640px]" src="https://www.youtube.com/embed/qLUsVC9w2E0?si=MK-6ov5ieXNBQ0lq" title="Video Profile 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
  </div>

  <section class="w-[1280px] m-auto py-12">
    <h3 class="text-4xl font-title py-12">Projects That I Worked On</h3>
    <div class="flex flex-row gap-12 justify-center">
      <div class="relative border border-white w-[300px] h-[600px]">
        <Button class="absolute bottom-6 left-6 w-[80%]">Graphic Design and Illustrations</Button>
      </div>
      <div class="relative border border-white w-[300px] h-[600px]">
        <Button class="absolute bottom-6 left-6 w-[80%]">Creative Direction</Button>
      </div>
      <div class="relative border border-white w-[300px] h-[600px]">
        <Button class="absolute bottom-6 left-6 w-[80%]">UI and UX Design</Button>
      </div>
    </div>
  </section>

  <section class="bg-white m-auto py-12 flex flex-col items-center">
    <h3 class="text-4xl text-black font-title py-12">Say Hi, Don't be Shy</h3>
    <div class="w-[1280px]">
      <Form></Form>
    </div>
  </section>

<section class="py-12">
  <Footer></Footer>
</section>

  <p class="flex justify-end pr-8">Lintang Wiranandha - 2024</p>
</template>

<style scoped>
</style>
