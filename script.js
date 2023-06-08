let crossbar = document.querySelector(".crossbar");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".closeBtn");



crossbar.addEventListener("click", function () {
    sidebar.classList.toggle("showSidebar");
})

closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("showSidebar");
})