function searchArticles() {
    const searchInput = document.getElementById('search');
    const filter = searchInput.value.toLowerCase();
    const articles = document.getElementsByClassName('article');
    
    for (let i = 0; i < articles.length; i++) {
        const articleContent = articles[i].getElementsByClassName('article-content')[0];
        const textContent = articleContent.innerText || articleContent.textContent;
        
        if (textContent.toLowerCase().indexOf(filter) > -1) {
            articles[i].style.display = "";
        } else {
            articles[i].style.display = "none";
        }
    }
}