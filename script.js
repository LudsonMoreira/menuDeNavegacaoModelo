/*Função que cria o submenu*/
function toggleMenu() {
    /*Variável que armazena as propriedades do submenu baseado em sua classe*/
    var menuList = document.querySelector('.menu-list');
    /*Estrutura de decisão para ocultar ou exibir o submenu */
    if (menuList.style.display === "flex") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "flex";
    }
}