<template>
	<div class="flex flex-row px-10 py-2 items-center space-x-5 shadow-md">
		<div class="flex flex-row items-center w-2/12 space-x-3">
			<img class="h-7" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg">
			<a class="text-xs font-extralight text-gray-400 hover:bg-gray-200 hover:text-green-400 py-2 px-1 rounded-md" href="#">Kategori</a>
		</div>
		<div class="w-8/12">
			<input class="form-input px-4 py-1 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" type="text" name="search">
		</div>
		<div class="flex flex-row items-center w-2/12 justify-between">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
			  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
			</svg>
			<div class="space-x-2">
				<button class="px-4 py-2 rounded-lg text-xs border border-green-500 text-green-500 font-bold">Masuk</button>
				<button class="px-4 py-2 rounded-lg text-xs bg-green-500 text-white font-bold">Daftar</button>
			</div>
		</div>
	</div>
</template>