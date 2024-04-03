<script setup>
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
</script>

<template id="section">
    <div class="flex flex-row items-center justify-between">
        <a href="#"><img src="/src/assets/32w.svg" alt="" class="w-12"></a>
        <Menubar :model="items" class="flex flex-row gap-4 justify-between">
            <Button>
                <a href="">Know Me</a>
            </Button>
            <Button>
                <a href="">My Works</a>
            </Button>
            <Button>
                <a href="">Holla at me</a>
            </Button>
        </Menubar>
    </div>
</template>

<style scoped></style>