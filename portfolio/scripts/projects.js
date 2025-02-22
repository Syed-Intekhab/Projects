const projects = [
    {
        img: "portfolio/images/projects/1740049930_67b70e0a01d33.png",
        name: "Random Quote Generator",
        whom: "PERSONAL",
        desc: "A simple yet powerful Quote Generator app built using HTML, CSS, and JavaScript. It provides users w...",
        link: "https://github.com/Syed-Intekhab/Projects/blob/main/project-3%20Random-Quote-Generator.html",
        live: "https://syed-intekhab.github.io/Projects/project-3%20Random-Quote-Generator.html"
    },
    {
        img: "portfolio/images/projects/1740049484_67b70c4c2039f.png",
        name: "To Do List",
        whom: "PERSONAL",
        desc: "A responsive and interactive To-Do List app built using HTML, CSS, and JavaScript. It helps users ef...",
        link: "https://github.com/Syed-Intekhab/Projects/blob/main/project-2%20To-Do%20List.html",
        live: "https://syed-intekhab.github.io/Projects/project-2%20To-Do%20List.html"
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
const containerEl = document.querySelector(".js-projects-card-container");
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

containerEl.innerHTML = projectHTML;