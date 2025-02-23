let tl = gsap.timeline();

//Header Animation
tl.from(".user-image-container, .search-bar-container, .js-fav-song-icon",{
	y: -20,
	opacity: 0,
	delay: 0.2,
	duration: 0.6,
});


//Main Section Animation

tl.from(".js-anime-poster-image, .js-anime-seek",{
	opacity: 0,
	duration: 0.3
});

tl.from(".js-anime-controls i",{
	scale: 0,
	duration: 0.3,
	stagger: 0.2
});

tl.from(".js-anime-right-section h1", {
	scale: 0
});

function showCards(){
	tl.from(".js-anime-card-container .card",{
		y: -20,
		duration: 0.2,
		opacity: 0,
		stagger: 0.2
	});
}

function handleFavSongsEntrance(){
	gsap.from(".js-anime-fav-songs",{
		x: 200,
		duration: 0.5
	});
}