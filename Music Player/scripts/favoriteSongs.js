//fav songs logic
const favSongIcon = document.querySelector(".js-fav-song-icon");

favSongIcon.addEventListener("click", () => {
	if(favoriteSongs.length > 0){
		if(favSongs.style.display === "block"){
			favSongs.style.display = "none";
		} else {
			let favSongsHTML = "";
		
			favoriteSongs.forEach((favSong) => {
				favSongsHTML += `
					<div class="fav-song-card" id="${favSong.id}">
						<img src="${favSong.img}">
						<h3>${favSong.name}</h3>
					</div>
				`;
			});
	
			favSongs.innerHTML = favSongsHTML;
	
			favSongs.style.display = "block";
			fullScreen.style.display = "block";
			handleFavSongsEntrance();
		}
	} else {
		alert("You don't have any favorite song yet!");
	}
});

fullScreen.addEventListener("click", () => {
	fullScreen.style.display = "none";
	favSongs.style.display = "none";
	if(!searchBarContainerEl.classList.contains("active")){
		searchBarContainerEl.classList.toggle("active");
	}
	searchInputEl.value = "";
	fullScreen.innerHTML = "";
});

fullScreen.addEventListener("click", (event) => {
	songs.forEach((song, index) => {
		if(event.target.id === song.id){
			playingSong = index;
			showSongs();
			seekEl.value = 0;
			clearInterval(intervalId);
			handlePlay();
			forward.style.opacity = 1;
			backward.style.opacity = 1;
		}
	});
});