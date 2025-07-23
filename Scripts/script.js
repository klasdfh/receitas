// Compatibilidade para navegadores antigos - usar getElementById em vez de const/let
var userInput = document.getElementById("search-box");
var searchBtn = document.getElementById("search-btn");

// Usar addEventListener com fallback para IE8 e anteriores
if (searchBtn.addEventListener) {
    searchBtn.addEventListener("click", function () {
        var termo = userInput.value.toLowerCase();
        var receitas = document.getElementsByClassName("recipe-item");
        for (var i = 0; i < receitas.length; i++) {
            var texto = receitas[i].textContent || receitas[i].innerText; // fallback para textContent
            if (texto.toLowerCase().indexOf(termo) > -1) {
                receitas[i].className = "recipe-item";
            } else {
                receitas[i].className = "recipe-item hidden";
            }
        }
    });

    userInput.addEventListener("keyup", function (e) {
        // Usar keyCode para compatibilidade (key não existe em Safari 9)
        if (e.keyCode === 13) {
            searchBtn.click();
        }
    });
} else if (searchBtn.attachEvent) {
    // Fallback para IE8 e anteriores
    searchBtn.attachEvent("onclick", function () {
        var termo = userInput.value.toLowerCase();
        var receitas = document.getElementsByClassName("recipe-item");
        for (var i = 0; i < receitas.length; i++) {
            var texto = receitas[i].textContent || receitas[i].innerText;
            if (texto.toLowerCase().indexOf(termo) > -1) {
                receitas[i].className = "recipe-item";
            } else {
                receitas[i].className = "recipe-item hidden";
            }
        }
    });

    userInput.attachEvent("onkeyup", function (e) {
        if (e.keyCode === 13) {
            searchBtn.click();
        }
    });
}
