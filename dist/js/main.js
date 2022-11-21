const articles = {
    "1": {
        "title": "1",
        "article": "<h1>Test</h1>\
        Prueba",
        "formulas": "<h2>Fórmulas</h2><br><p> $a = b rArr b = a$ <br>a</p>"
    },

    "2": {
        "title": "2",
        "article": "test",
        "formulas": "<p> $R=frac {V} {I}$ </p>"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let article = urlParams.get("id");
    let mainContainer = document.getElementById("main-container");
    let articleContainer = document.getElementById("article-container");

    if(article === null){
        continueToMain();
    }
    else{
        getArticle(article);
    }

    function continueToMain(){
        mainContainer.classList.remove("hidden");
        articleContainer.classList.add("hidden");
    }

    async function getArticle(id){
        mainContainer.classList.add("hidden");
        articleContainer.classList.remove("hidden");

        let title = document.getElementById("title");
        let article = document.getElementById("article");
        let formulas = document.getElementById("formulas");
        
        title.innerHTML = articles[id].title;
        article.innerHTML = articles[id].article;
        formulas.innerHTML = articles[id].formulas;
        
        try{
            MathJax.startup.document.state(0);
            MathJax.typeset();
        }
        catch (e){
            console.log(e);
        }
    }
});