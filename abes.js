// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageId, element) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active from sidebar
    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {
        item.classList.remove("active");
    });


    // Add active to clicked item
    if (element) {
        element.classList.add("active");
    }


    // Close sidebar on mobile
    if (window.innerWidth <= 700) {
        document.getElementById("sidebar")
            .classList.remove("show");
    }
}


// ===============================
// SIDEBAR
// ===============================

function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("show");
}


// ===============================
// LOGOUT
// ===============================

function logout() {

    const result = confirm(
        "Are you sure you want to logout?"
    );

    if (result) {
        alert("Logged out successfully!");
    }
}


// ===============================
// SEARCH
// ===============================

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const value =
        this.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "flex";
        }
        else {
            card.style.display = "none";
        }

    });

});