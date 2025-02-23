playEl.addEventListener("click", () => {
	if(!isPlaying){
		handlePlay();
	} else {
		handlePause();
	}
});

backward.addEventListener("click", () => {
	if(playingSong > 0){
		playingSong--;
		showSongs();
		seekEl.value = 0;
		clearInterval(intervalId);
		handlePlay();
		forward.style.opacity = 1;
	} else {
		backward.style.opacity = 0.5;
	}
});

forward.addEventListener("click", () => {
	if(playingSong < songs.length - 1){
		playingSong++;
		showSongs();
		seekEl.value = 0;
		clearInterval(intervalId);
		handlePlay();
		backward.style.opacity = 1;
	} else {
		forward.style.opacity = 0.5;
	}
});

seekEl.addEventListener("change", () => {
	audio.currentTime = seekEl.value;
	clearInterval(intervalId);
	handlePlay();
});

favEl.addEventListener("click", () => {
	checkIsFavSong();
});


function checkIsFavSong(){
	let matchingSong;
	let matchingSongIndex;

	favoriteSongs.forEach((favSong, index) => {
		if(favSong.id === songs[playingSong].id){
			matchingSong = favSong;
			matchingSongIndex = index;
		}
	});

	if(!matchingSong){
		favoriteSongs.push(
			{
				name: songs[playingSong].name,
				url: songs[playingSong].url,
				img: songs[playingSong].img,
				id: songs[playingSong].id
			}
		);

		let tl = gsap.timeline();
		
		tl.to(".js-fav-icon", {
			scale: 1.2,
			duration: 0.3
		});

		tl.from(".js-fav-icon", {
			scale: 1,
			duration: 0.2
		});

		favEl.classList.remove("ri-heart-line");
		favEl.classList.add("ri-heart-fill");
		favEl.style.color = "red";

		localStorage.setItem("favSongs", JSON.stringify(favoriteSongs));
	} else {
		favoriteSongs.splice(matchingSongIndex, 1);
		favEl.classList.remove("ri-heart-fill");
		favEl.classList.add("ri-heart-line");
		favEl.style.color = "white";

		localStorage.setItem("favSongs", JSON.stringify(favoriteSongs));
	}
}