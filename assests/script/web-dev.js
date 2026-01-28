
    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Outline follows with a tiny delay for a "smooth" feel
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add expansion effect on hoverable elements
    const links = document.querySelectorAll("a, .skill-tag, .card");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => outline.classList.add("cursor-hover"));
        link.addEventListener("mouseleave", () => outline.classList.remove("cursor-hover"));
    });
