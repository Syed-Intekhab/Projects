// Writing Effect
const containerEl = document.querySelector(".js-writing-effect");
let careerIndex = 0;
let characterIndex = 0;

const careers = [
    "Student",
    "Instructor",
    "Freelancer",
    "Web Developer"
];

function updateText() {
    characterIndex++;

    containerEl.innerHTML = `I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}`;

    if (characterIndex === careers[careerIndex].length) {
        // Wait for 2 seconds after each full word is typed
        setTimeout(() => {
            careerIndex++;
            characterIndex = 0;

            if (careerIndex === careers.length) {
                careerIndex = 0;
            }
            
            updateText();
        }, 2000); // 2-second delay after a full word
    } else {
        setTimeout(updateText, 150); // Typing speed
    }
}

updateText();