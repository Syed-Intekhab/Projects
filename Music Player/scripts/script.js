handleSearch();

//Main section logic

const cardContainerEl = document.querySelector(".js-card-container");
const posterImageEl = document.querySelector(".js-poster-image");
const playEl = document.querySelector(".js-play-icon");
const backward = document.querySelector(".js-backward-icon");
const forward = document.querySelector(".js-forward-icon");
const seekEl = document.querySelector(".js-seek");
const favEl = document.querySelector(".js-fav-icon");
const favSongs = document.querySelector(".js-fav-songs");
const audio = new Audio();
let songHTML = "";
let playingSong = 0;
let isPlaying = false;
let intervalId;

function showSongs(){
	songs.forEach((song, index) => {
		songHTML += `
			<div class="card" id="${index}" data-song-id="${song.id}">
				<img src="${song.img}">
				<h2>${song.name}</h2>
			</div>
		`;
	});
	
	posterImageEl.src = songs[playingSong].img;
	audio.src = songs[playingSong].url;
	let matchingSongDet;
	audio.addEventListener('loadedmetadata', () => {
        
		seekEl.max = audio.duration;
	});

	favoriteSongs.forEach((songFav) => {
		if(songFav.id === songs[playingSong].id){
			matchingSongDet = songFav;
		}
	});

	if(matchingSongDet){
		favEl.classList.remove("ri-heart-line");
		favEl.classList.add("ri-heart-fill");
		favEl.style.color = "red";
	} else {
		favEl.classList.remove("ri-heart-fill");
		favEl.classList.add("ri-heart-line");
		favEl.style.color = "white";
	}

}


showSongs();
cardContainerEl.innerHTML = songHTML;
showCards();

cardContainerEl.addEventListener("click", (event) => {
	playingSong = event.target.id;
	showSongs();
	seekEl.value = 0;
	clearInterval(intervalId);
	handlePlay();
	forward.style.opacity = 1;
	backward.style.opacity = 1;
});

favSongs.addEventListener("click", (event) => {
	songs.forEach((song, index) => {
		if(song.id === event.target.id){
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