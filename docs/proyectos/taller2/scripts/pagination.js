const pageFiles = ['blog.html','10042024.html', 'a10042024.html', 'b10042024.html']; // Nombres de los archivos de las páginas
let currentPage = 1;

window.onload = function() {
    loadPage(currentPage);
    displayPageNumbers();
    updateButtons();
};

function loadPage(page) {
    const contentDiv = document.getElementById('content');
    fetch(`blog/${pageFiles[page - 1]}`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        });
}

function displayPageNumbers() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = '';

    for (let i = 1; i <= pageFiles.length; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.className = 'page-number';
        pageNumber.innerText = i;
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.addEventListener('click', function() {
            goToPage(i);
        });
        pageNumbersContainer.appendChild(pageNumber);
    }
}

function updateButtons() {
    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = currentPage === pageFiles.length;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage);
        displayPageNumbers();
        updateButtons();
    }
}

function nextPage() {
    if (currentPage < pageFiles.length) {
        currentPage++;
        loadPage(currentPage);
        displayPageNumbers();
        updateButtons();
    }
}

function goToPage(page) {
    currentPage = page;
    loadPage(currentPage);
    displayPageNumbers();
    updateButtons();
}

