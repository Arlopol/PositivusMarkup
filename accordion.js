document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    if (accordions.length > 0) {
        // İlk accordion'ı aktif yap
        const firstAccordion = accordions[0];
        const firstContent = firstAccordion.querySelector(".accordion-content");
        firstAccordion.classList.add("active");
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    }

    accordions.forEach((accordion) => {
        const label = accordion.querySelector(".accordion-label");
        const content = accordion.querySelector(".accordion-content");

        label.addEventListener("click", () => {
            const isActive = accordion.classList.contains("active");

            // Tüm accordion'ları kapat
            document.querySelectorAll(".accordion").forEach((item) => {
                item.classList.remove("active");
                item.querySelector(".accordion-content").style.maxHeight = null;
            });

            // Tıklanan accordion'ı aç/kapat
            if (!isActive) {
                accordion.classList.add("active");
                content.style.maxHeight = content.scrollHeight + 50 + "px";
            } else {
                accordion.classList.remove("active");
                content.style.maxHeight = null;
            }
        });
    });
});
