<template>
	<div class="flex">
		<RouterLink :to="{ name: 'home', query: { navigatedAwayBy: 'explore-another-button' } }">
			<div class="flex items-center shadow-explore rounded-r-2xl overflow-hidden font-futura">
				<div class="w-28 bg-white px-4 flex justify-end rounded-r-2xl py-2 relative z-20">
					<img
						src="/chevron-left-green.png"
						alt="Chevron Left Green"
						class="w-[40px] h-[40px]"
					/>
				</div>
				<div class="flex items-center pr-[18px] pl-7 rounded-r-2xl -ml-3 bg-[#195C68] h-[56px] relative z-10 text-white text-[12.5px]">
					Explore another brand
				</div>
			</div>
		</RouterLink>
	</div>
</template>
