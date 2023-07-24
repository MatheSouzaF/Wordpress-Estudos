var previousHeight = window.innerHeight;
var previousWidth = window.innerWidth;
var pageReloaded = false;

// Função para verificar a altura e largura da tela e recarregar a página se necessário
function checkScreenSize() {
    var currentHeight = window.innerHeight;
    var currentWidth = window.innerWidth;

    if (currentHeight < 790 && previousHeight >= 790 && !pageReloaded) {
        location.reload(); // Recarrega a página
        pageReloaded = true; // Define a variável de controle como true
    }

    if (currentWidth > 769 && currentHeight > currentWidth && previousWidth <= 769 && !pageReloaded) {
        location.reload(); // Recarrega a página
        pageReloaded = true; // Define a variável de controle como true
    }

    // Atualiza a altura e largura anterior
    previousHeight = currentHeight;
    previousWidth = currentWidth;
}

// Evento de redimensionamento da janela
window.addEventListener('resize', function() {
    checkScreenSize();
});

// Chama a função ao carregar a página
checkScreenSize();
