//add data to the cart..

const products = [
	{name: "White chair", headLine: "Soft as clouds!", price: "1000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
	{name: "Wooden Stool", headLine: "Old fasion stool!", price: "900", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Sofa Chair", headLine: "Confortable as sofa!", price: "2000", image: "https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "White chair", headLine: "Soft as clouds!", price: "1000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
	{name: "Wooden Stool", headLine: "Old fasion stool!", price: "900", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Sofa Chair", headLine: "Confortable as sofa!", price: "2000", image: "https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "White chair", headLine: "Soft as clouds!", price: "1000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
	{name: "Wooden Stool", headLine: "Old fasion stool!", price: "900", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Sofa Chair", headLine: "Confortable as sofa!", price: "2000", image: "https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Wooden Chair", headLine: "Old Chair!", price: "500", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww"}
];


const popularProducts = [
	{name: "White chair", headLine: "Soft as clouds!", price: "1000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
	{name: "Wooden Stool", headLine: "Old fasion stool!", price: "900", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Sofa Chair", headLine: "Confortable as sofa!", price: "2000", image: "https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "White chair", headLine: "Soft as clouds!", price: "1000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
	{name: "Wooden Stool", headLine: "Old fasion stool!", price: "900", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Sofa Chair", headLine: "Confortable as sofa!", price: "2000", image: "https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "White chair", headLine: "Soft as clouds!", price: "1000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
	{name: "Wooden Stool", headLine: "Old fasion stool!", price: "900", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Sofa Chair", headLine: "Confortable as sofa!", price: "2000", image: "https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww"},
	{name: "Wooden Chair", headLine: "Old Chair!", price: "500", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww"}
];

let cart = [];


function showProducts(){
	let clutter = "";
	
	products.forEach((productObj, index) => {
		clutter += `
	            <div class="product w-fit rounded-xl p-2 bg-white">
	                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
				<img src="${productObj.image}" class="w-full h-full object-cover object-center">
			</div>
	                <div class="data w-full px-2 py-5">
	                    <h1 class="font-semibold text-xl leading-none tracking-tight">${productObj.name}</h1>
	                    <div class="flex justify-between w-full items-center mt-2">
	                        <div class="w-1/2">
	                            <h3 class="font-semibold opacity-20">${productObj.headLine}</h3>
	                            <h4 class="font-semibold mt-2">&#8377; ${productObj.price}</h4>
	                        </div>
	                        <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
					<i data-index="${index}" class="add ri-add-line"></i>
				</button>
	                    </div>
	                </div>
	            </div>
		`;
	});
	
	document.querySelector(".products").innerHTML = clutter;
}

function showPopularProducts(){
	let clutter = "";

	popularProducts.forEach((product) => {
		clutter += `
			<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                	    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                	        <img class="w-full h-full object-cover" src="${product.image}" alt="">
                	    </div>
                	    <div class="data py-2 w-full">
                	        <h1 class="leading-none font-semibold">${product.name}</h1>
                	        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headLine}</h4>
                	        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                	    </div>
               		 </div>
		`;
	});

	document.querySelector(".populars").innerHTML = clutter;
}

function addToCart(){
	document.querySelector(".products")
		.addEventListener("click", function(event) {
			if(event.target.classList.contains("add")){
				cart.push(products[event.target.dataset.index]);
			}
		});
}

function showCart(){
	document.querySelector(".carticon")
		.addEventListener("click", () => {
			
			let clutter = "";

			cart.forEach((prod, index) => {
				clutter += `
					<div class="flex gap-2 bg-white p-2 rounded-lg">
						<div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
							<img class="w-full h-full object-cover" src="${prod.image}">
						</div>
						<div>
							<h3 class="font-semibold">prod.name</h3>
							<h5 class="text-sm font-semibold opacity-80">prod.headLine</h5>
						</div>	
					</div>
				`;
			});
			
			document.querySelector(".cartexpnd").innerHTML = clutter;
			document.querySelector(".cartexpnd").style.display = "block";
		});
}

showCart();
showProducts();
showPopularProducts()
addToCart();
