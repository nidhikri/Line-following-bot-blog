document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Smooth scrolling effect for sidebar links
    document.querySelectorAll(".sidebar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🔹 Highlight Active Section in Sidebar While Scrolling
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".toc-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // 🔹 Expand/Collapse Code Section with Smooth Fade Effect
    document.querySelector(".expand-btn").addEventListener("click", function () {
        const codeContainer = document.querySelector(".code-container");
        if (codeContainer.style.display === "block") {
            codeContainer.style.opacity = "0";
            setTimeout(() => { codeContainer.style.display = "none"; }, 300);
            this.textContent = "Show Code";
        } else {
            codeContainer.style.display = "block";
            setTimeout(() => { codeContainer.style.opacity = "1"; }, 10);
            this.textContent = "Hide Code";
        }
    });

    // 🔹 Dark Mode Toggle with Local Storage Save
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            this.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            this.textContent = "🌙 Dark Mode";
        }
    });

    // 🔹 Scroll Progress Bar Update
    window.addEventListener("scroll", function () {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        document.getElementById("progress-bar").style.width = scrollPercentage + "%";
    });

    // 🔹 Clickable Circuit Diagram (Zoom In & Out)
    document.getElementById("circuit-img").addEventListener("click", function () {
        if (this.style.transform === "scale(1.5)") {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 0px 10px #f57c00";
        } else {
            this.style.transform = "scale(1.5)";
            this.style.boxShadow = "0px 0px 20px #e65100";
        }
    });

    // 🔹 Hover Glow Effect for All Buttons
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0px 0px 12px rgba(255, 102, 0, 0.8)";
        });

        btn.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });
});
