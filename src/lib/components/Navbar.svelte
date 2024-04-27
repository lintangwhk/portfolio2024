<script>
	const links = [
		{
			label: 'Peek at my works',
			route: '/#projects'
		},
		{
			label: 'Holla at me',
			child: [
				{
					label: 'Test child',
					route: '/test'
				}
			]
		}
	];
</script>

<div class="navbar bg-black text-white">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">
			<svg
				class="h-10 w-10"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 32 32"
				><path
					class="cls-1"
					d="M16,0,2.14,8V24L16,32l13.86-8V8ZM28.22,12.46,22.32,9l-8,4.5,10.41,6-3.56,2L6.37,13,20.8,4.66l7.42,4.28Zm-24.43.9,15.77,9.12-3.55,2L3.78,17.23ZM16,1.89l3.16,1.82L3.78,12.56V8.95Zm0,28.21L3.78,23.05V19.14L16,26.42l12-6.93-10.38-6,4.65-2.62,5.92,3.49v8.69Z"
				/></svg
			>
		</a>
	</div>
	<div class="flex-none">
		<div class="menu menu-horizontal px-1">
			{#each links as link}
				{#if link.child}
					<div class="dropdown">
						<div tabindex="0" role="button" class="btn btn-ghost">
							{link.label}
						</div>
						<div class="dropdown-content bg-white text-black shadow rounded-box p-2">
							{#each link.child as child}
								<a href={child.route}>
									<button class="btn btn-ghost">
										{child.label}
									</button></a
								>
							{/each}
						</div>
					</div>
				{:else}
					<a href={link.route}>
						<button class="btn btn-ghost">
							{link.label}
						</button>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>
