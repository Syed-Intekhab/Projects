const factContainerEl = document.querySelector(".js-fact-container");
const facts = [
    "🚀 I enjoy coding and constantly challenging myself with new technologies.",
    "💪 I'm a calisthenics athlete, balancing my tech journey with fitness.",
    "📚 I enjoy learning new concepts and simplifying complex topics."
];
let factHTML = "";
facts.forEach((fact) => factHTML += `<div class="fact"><p>${fact}</p></div>`);
factContainerEl.innerHTML = factHTML;