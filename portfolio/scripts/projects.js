const projects = [
    {
        img: "portfolio/images/projects/music_player_1.png",
        name: "Music Player",
        whom: "PERSONAL",
        desc: "A Music Player built using HTML, CSS, and JS. It provides users with a seamless music experience, al...",
        link: "https://github.com/Syed-Intekhab/Projects/blob/main/Music%20Player",
        live: "https://syed-intekhab.github.io/Projects/Music%20Player"
    },
    {
        img: "portfolio/images/projects/weather_app_1.png",
        name: "Weather App",
        whom: "PERSONAL",
        desc: "A responsive and interactive Weather app built using HTML, CSS, and JavaScript. It helps users get c...",
        link: "https://github.com/Syed-Intekhab/Projects/blob/main/project-5%20Weather-App.html",
        live: "https://syed-intekhab.github.io/Projects/project-5%20Weather-App.html"
    },
    {
        img: "portfolio/images/projects/1740049103_67b70acf82746.png",
        name: "Calculator",
        whom: "PERSONAL",
        desc: "A fully responsive calculator app built using HTML, CSS, and JavaScript. Designed for seamless usabi...",
        link: "https://github.com/Syed-Intekhab/Projects/blob/main/project-2%20To-Do%20List.html",
        live: "https://syed-intekhab.github.io/Projects/project-1%20Calculator.html"
    }
];
const projectsContainerEl = document.querySelector(".js-projects-card-container");
let projectHTML = "";

projects.forEach(card => {
    projectHTML += `
        <div class="project-card">
            <div class="project-image-container">
                <img src="${card.img}" alt="Project">
            </div>
            <div class="project-dets-container">
                <h2>${card.name}</h2>
                <div class="for-whom">${card.whom}</div>
                <p>${card.desc}</p>
                <div class="github-links-container">
                    <a href='${card.link}' target='_blank'>See Code</a>
                    <a href='${card.live}' target='_blank'>See Demo</a>
                </div>
            </div>
        </div>
    `;
});

projectsContainerEl.innerHTML = projectHTML;