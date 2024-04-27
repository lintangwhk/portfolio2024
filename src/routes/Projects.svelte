<script>
	export let id = '';
	const projects = [
		{
			title: 'Graphic Design and Illustrations',
			image: '/src/assets/sample.png'
		},
		{
			title: 'Creative Direction'
		},
		{
			title: 'UI and UX Design'
		}
	];
</script>

<div {id} class="w-full md:h-screen flex flex-col items-center">
	<div class="my-auto p-6">
		<h3 class="text-2xl font-bold text-center py-4">Projects That I Worked On</h3>
		<div class="flex flex-col md:flex-row gap-5 justify-center items-center md:h-[70vh]">
			{#each projects as project}
				<div
					class="flex flex-col-reverse h-96 md:h-full w-full md:w-2/6 border border-white p-4"
					style="background-image: url({project.image}); background-size: cover; background-repeat: no-repeat; background-position: center"
				>
					<button class="btn text-white btn-outline h-20">{project.title}</button>
				</div>
			{/each}
		</div>
	</div>
</div>
