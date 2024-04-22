<script setup>
import Button from 'primevue/button';
</script>

<template>
    <div class="text-black flex flex-col items-center gap-4 w-full max-w-2xl">
        <div class="flex flex-col items-start w-full">
            <label for="name">Name</label>
            <input type="text" id="name" class="bg-white border border-black p-2 w-full">
        </div>
        <div class="flex flex-col items-start w-full">
            <label for="affiliate">Company/Organization</label>
            <input type="text" id="affiliate" class="bg-white border border-black p-2 w-full">
        </div>
        <div class="flex flex-col items-start w-full">
            <label for="message">Message</label>
            <Textarea id="message" rows="4" placeholder="Let's make something together!" class="bg-white border border-black p-2 w-full"></Textarea>
        </div>
        <Button class="!text-black rounded-none">Submit</Button>
    </div>
</template>

<style scoped>
</style>