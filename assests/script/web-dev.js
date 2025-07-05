// Back to Top Button and Dynamic Testimonials functionality
document.addEventListener('DOMContentLoaded', function () {
    // Back to Top Button
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dynamic Testimonials
    const testimonials = [
        {
            text: "Prem delivered our project on time and exceeded expectations!",
            author: "Happy Client"
        },
        {
            text: "Excellent communication and top-notch coding skills. Highly recommended.",
            author: "Project Manager"
        },
        {
            text: "Very professional and creative. My website looks amazing!",
            author: "Business Owner"
        }
    ];

    let currentTestimonial = 0;
    const testimonialContainer = document.getElementById('testimonialContainer');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    function showTestimonial(index) {
        const t = testimonials[index];
        testimonialContainer.innerHTML = `
            <blockquote class="testimonial">
                <p>"${t.text}"</p>
                <footer>- ${t.author}</footer>
            </blockquote>
        `;
    }

    if (testimonialContainer && prevBtn && nextBtn) {
        showTestimonial(currentTestimonial);

        prevBtn.addEventListener('click', function () {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        nextBtn.addEventListener('click', function () {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
});
