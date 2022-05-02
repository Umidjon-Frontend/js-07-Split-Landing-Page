const container = document.querySelector(".container");
const leftSplit = document.querySelector(".left-split");
const rightSplit = document.querySelector(".right-split");

leftSplit.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});
leftSplit.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

rightSplit.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});
rightSplit.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});
