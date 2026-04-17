async function loadHeader() {
    try {
        const response = await fetch('header.html');
        const menuContent = await response.text();
        const headerElement = document.getElementById('header-import');
        
        if (headerElement) {
            headerElement.innerHTML = menuContent;
            highlightActiveButton();
        }
    } catch (error) {
        console.error("Could not load header:", error);
    }
}

function highlightActiveButton() {
    // 1. Get the current path (e.g., "/about") and remove the leading slash
    // This turns "/about" into "about"
    let currentPath = window.location.pathname.split("/").pop().toLowerCase();
    
    // 2. Default to "index" if the path is empty
    if (currentPath === "") {
        currentPath = "index";
    }

    const navLinks = document.querySelectorAll(".top_menu_button");

    navLinks.forEach(link => {
        // 3. Get the href (e.g., "about.html")
        const linkHref = link.getAttribute("href").toLowerCase();
        
        // 4. Create a "Clean" version of the link without the .html
        // This turns "about.html" into "about"
        const cleanHref = linkHref.replace(".html", "");

        // 5. Compare the clean names
        if (currentPath === cleanHref || currentPath === linkHref) {
            link.classList.add("active");
            console.log("Matched and activated:", linkHref);
        }
    });
}

loadHeader();