<script setup>
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRouter } from "vue-router"

const router = useRouter()

const items = ref([
    {
        label: 'Peek at my works',
        route: '/#project',
    },
    {
        label: 'Holla at me',
        route: '/#contact',
    }
]);

</script>

<template id="section">
    <div class="flex flex-row items-center justify-between">
        <a href="#">
            <svg viewBox="0 0 32 32" fill="currentColor" class="w-10 h-10">
                <path
                    d="M16,0,2.14,8V24L16,32l13.86-8V8ZM28.22,12.46,22.32,9l-8,4.5,10.41,6-3.56,2L6.37,13,20.8,4.66l7.42,4.28Zm-24.43.9,15.77,9.12-3.55,2L3.78,17.23ZM16,1.89l3.16,1.82L3.78,12.56V8.95Zm0,28.21L3.78,23.05V19.14L16,26.42l12-6.93-10.38-6,4.65-2.62,5.92,3.49v8.69Z" />
            </svg>
        </a>
        <Menubar :model="items" class="flex flex-row gap-4 justify-between border-none underline">
            <template #item="{ item }">
                <a class="px-5 cursor-pointer" @click="() => { router.replace(item.route) }">{{ item.label }}</a>
            </template>
        </Menubar>
    </div>
</template>

<style scoped></style>