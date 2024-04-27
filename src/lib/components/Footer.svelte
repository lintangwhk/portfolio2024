<script setup>
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-row justify-between pt-24 pb-4 px-4 m-auto bg-black text-white">
	<div>
		<h3 class="text-xl font-bold py-2">One Call, That's All</h3>
		<div class="flex flex-row gap-8">
			<button class="rounded-none">
				<Icon icon="mingcute:whatsapp-fill" class="text-2xl" />
			</button>
			<button class="rounded-none">
				<Icon icon="ic:round-email" class="text-2xl" />
			</button>
		</div>
	</div>

	<div class="flex flex-col items-end">
		<h3 class="text-xl font-bold py-2">Socials</h3>
		<div class="flex flex-row gap-8">
			<button class="rounded-none">
				<Icon icon="mingcute:facebook-fill" class="text-2xl" />
			</button>
			<button class="rounded-none">
				<Icon icon="ri:instagram-fill" class="text-2xl" />
			</button>
		</div>
	</div>
</div>
