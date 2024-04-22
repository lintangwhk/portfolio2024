<script setup>
    import Button from 'primevue/button';
    import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="flex flex-row justify-between py-24 max-w-7xl m-auto">
    <div>
      <h3 class="text-4xl font-title py-12">One Call, That's All</h3>
      <div class="flex flex-row gap-8">
        <Button class="rounded-none">
        <Icon icon="mingcute:whatsapp-fill" class="text-2xl" />
      </Button>
      <Button class="rounded-none">
        <Icon icon="ic:round-email" class="text-2xl" />
      </Button>
      </div>
    </div>

    <div class="flex flex-col items-end">
      <h3 class="text-4xl font-title py-12">Socials</h3>
      <div class="flex flex-row gap-8">
        <Button class="rounded-none">
          <Icon icon="mingcute:facebook-fill" class="text-2xl" />
        </Button>
        <Button class="rounded-none">
          <Icon icon="ri:instagram-fill" class="text-2xl" />
        </Button>
      </div>
    </div>
  </div>
    
</template>