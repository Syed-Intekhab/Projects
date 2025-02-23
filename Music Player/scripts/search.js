//Search bar logic
const fullScreen = document.querySelector(".remove-fav-screen");
const searchBarContainerEl = document.querySelector(".search-bar-container");
const searchInputEl = document.querySelector(".js-input");

function handleSearch(){			
	const magnifierEl = document.querySelector(".magnifier");
		
	magnifierEl.addEventListener("click", () => {
		searchBarContainerEl.classList.toggle("active");
		searchInputEl.focus();
		if(!searchBarContainerEl.classList.contains("active")){
			fullScreen.style.display = "block";
		} else {
			searchInputEl.value = "";
		}

		if(favSongs.style.display === "block"){
			favSongs.style.display = "none";
		}
	});
}

searchInputEl.addEventListener("input", () => {
	const searchTerm = songs.filter(song => song.name.toLowerCase().startsWith(searchInputEl.value.toLowerCase()));
	
	
	let searchHTML = "";
	searchTerm.forEach((song) => {
		searchHTML += `
			<div class="search-output-container" id="${song.id}">
				<i class="ri-search-line js-search-icon"></i>
				<h3 class="js-search-h3">${song.name}</h3>
			</div><br>
		`;
	});
	
	fullScreen.innerHTML = searchHTML;

});