const contactModal = document.getElementById("contactModal");
const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");
const scrollBtn = document.getElementById("scrollTop");

openContact.onclick = () => contactModal.style.display = "block";
closeContact.onclick = () => contactModal.style.display = "none";

window.onclick = (e) => {
    if (e.target === contactModal) contactModal.style.display = "none";
};

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
