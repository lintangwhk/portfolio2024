<script setup>
const projects = [
    {
        title: "Graphic Design and Illustrations",
        image: "/src/assets/sample.png"
    },
    {
        title: "Creative Direction"
    },
    {
        title: "UI and UX Design"
    },
]
</script>
<template>
    <div class="w-full p-6 m-auto max-w-7xl">
        <h3 class="text-4xl font-title py-12">Projects That I Worked On</h3>
        <div class="flex flex-col md:flex-row gap-5 justify-center items-center md:h-[80vh]">
            <div v-for="project in projects" class="flex flex-col-reverse h-96 md:h-full w-2/3 md:w-2/6 border border-white p-4"
                :style="{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
                <Button class="h-20 bg-black">{{ project.title }}</Button>
            </div>
        </div>
    </div>
</template>