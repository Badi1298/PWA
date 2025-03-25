<template>
	<RouterLink :to="{ name: 'home', query: { navigatedAwayBy: 'explore-another-button' } }">
		<div class="flex items-center shadow-explore font-futura rounded-r-[15px]">
			<div class="flex items-center pl-8 pr-[36px] rounded-l-[15px] bg-[#195C68] h-[55px] relative z-10 text-white text-[12.5px] shadow-explore">
				Explore another brand
			</div>
			<div class="bg-white px-[17px] -ml-3 flex justify-end items-center shadow-explore rounded-[15px] h-[55px] relative z-20">
				<img
					src="/chevron-right-green.png"
					alt="Chevron Left Green"
					class="w-[37.5px] h-[39px]"
				/>
			</div>
		</div>
	</RouterLink>
</template>
