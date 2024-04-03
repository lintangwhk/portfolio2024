<script setup>
import Button from 'primevue/button';
</script>

<template>
    <div class="text-black flex flex-col items-center gap-4">
        <div class="flex flex-col items-start">
            <label for="name">Name</label>
            <input type="text" id="name" class="bg-white border border-black p-2 w-[32rem]">
        </div>
        <div class="flex flex-col items-start">
            <label for="affiliate">Company/Organization</label>
            <input type="text" id="affiliate" class="bg-white border border-black p-2 w-[32rem]">
        </div>
        <div class="flex flex-col items-start">
            <label for="message">Message</label>
            <Textarea id="message" rows="4" placeholder="Let's make something together!" class="bg-white border border-black p-2 w-[32rem]"></Textarea>
        </div>
        <Button class="font-bold bg-white border border-black hover:border-black hover:bg-black hover:text-white transition-all">Submit</Button>
    </div>
</template>

<style scoped>
</style>