audio.addEventListener("ended", () => {
	seekEl.value = 0;
	handlePause();
});

function handlePlay(){
	audio.play();
	intervalId = setInterval(() => {
		seekEl.value++;
	}, 1000);
	isPlaying = true;
	playEl.classList.remove("ri-play-mini-fill");
	playEl.classList.add("ri-pause-mini-fill");
}


function handlePause(){
	audio.pause();
	clearInterval(intervalId);
	isPlaying = false;
	playEl.classList.remove("ri-pause-mini-fill");
	playEl.classList.add("ri-play-mini-fill");
}