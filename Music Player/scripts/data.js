const songs = [
	{name: "Aawara shaam hai", url: "./songs/Aawara shaam hai.m4a", img: "./images/Aawara shaam hai.jpg", id: "s1"},
	{name: "Bedardi se Pyar ka", url: "./songs/Bedardi se pyar ka.m4a", img: "./images/Bedardi Se Pyaar Ka.jpg", id: "s2"},
	{name: "Hale dil", url: "./songs/Hale dil.m4a", img: "./images/Hale dil.jpg", id: "s3"},
	{name: "Ik lamha", url: "./songs/Ik lamha.mp3", img: "./images/Ik lamha.jpg", id: "s4"},
	{name: "Param sundari", url: "./songs/Param sundari.mp3", img: "./images/Param sundari.jpg", id: "s5"},
	{name: "Sanson ko jeene ka", url: "./songs/Sanson ko jeene ka.m4a", img: "./images/Sanson ko jeene ka.jpg", id: "s6"},
	{name: "Tu aake dekh le", url: "./songs/Tu aake dekh le.mp3", img: "./images/Tu ake dekh le.jpg", id: "s7"},
	{name: "Zara zara behekta", url: "./songs/Zara zara.mp3", img: "./images/Zara zara.jpg", id: "s8"},
	{name: "Aashiqui - Hum Mar jayenge", url: "./songs/hum mar jayenge.m4a", img: "./images/hum mar jayenge.jpg", id: "s9"},
	{name: "Baarish ki jaye", url: "./songs/barish ki jaye.m4a", img: "./images/baarish ki jaye.jpg", id: "s10"},
	{name: "Dil galti kar baitha", url: "./songs/Dil galti kar baitha.m4a", img: "./images/dil galti kar baitha hai.jpg", id: "s11"},
	{name: "Gali gali - KGF", url: "./songs/Gali gali - KGF.m4a", img: "./images/gali gali - kgf.jpg", id: "s12"},
	{name: "Psycho - Saho", url: "./songs/Psycho - Saho.mp3", img: "./images/saho - psycho.jpg", id: "s13"},
	{name: "Barsat ki dhun", url: "./songs/Barsat ki dhun.mp3", img: "./images/barsat ki dhun.jpg", id: "s14"},
];

let favoriteSongs = JSON.parse(localStorage.getItem("favSongs")) || [
	{name: "Aawara shaam hai", url: "./songs/Aawara shaam hai.m4a", img: "./images/Aawara shaam hai.jpg", id: "s1"},
	{name: "Bedardi se Pyar ka", url: "./songs/Bedardi se pyar ka.m4a", img: "./images/Bedardi Se Pyaar Ka.jpg", id: "s2"},	
];