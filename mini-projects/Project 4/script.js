let imagesArray = [
	{name: "Apples", image: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGVzfGVufDB8fDB8fHww"},
	{name: "Dogs", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"},
	{name: "Buildings", image: "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmdzfGVufDB8fDB8fHww"},
	{name: "Bananas", image: "https://plus.unsplash.com/premium_photo-1667926862695-629f15968976?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D"},
	{name: "Cats", image: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8fDA%3D"},
	{name: "Cars", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"}
];

const searchInput = document.querySelector("#searchInput");
let clutter = "";

imagesArray.forEach((obj) => {
	clutter += `
        <div class="box">
		<img class="cursor-pointer" src="${obj.image}" alt="${obj.name}">
		<div class="caption">Lorem ipsum </div>
	</div>
	`;
});
	
document.querySelector(".container").innerHTML = clutter;



searchInput
.addEventListener("focus", () => {
	document.querySelector(".overlay").style.display = "block";
});

searchInput
.addEventListener("blur", () => {
	document.querySelector(".overlay").style.display = "none";
	document.querySelector(".searchdata").style.display = "none";
});

searchInput
.addEventListener("input", () => {
	
	const updatedArray = imagesArray.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value.toLowerCase()));
	
	let clutter = "";

	updatedArray.forEach((obj) => {
		clutter += `
			<div class="res flex px-8 py-3">
				<i class="ri-search-line font-semibold mr-5"></i>
				<h3 class="font-semibold">${obj.name}</h3>
			</div>
		`;
	});

	document.querySelector(".searchdata").style.display = "block";	
	document.querySelector(".searchdata").innerHTML = clutter;
});