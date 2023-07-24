$(document).ready(function () {
  const maxWidth = 769;

  if (window.innerWidth < maxWidth) {
    // Ocultar o modal por padrão
    $('.modal').hide();

    // Quando um item do card for clicado
    $('.item').click(function () {
      // Verifique se o item não possui a classe de ocultação
      if (!$(this).hasClass('-none')) {
        // Obtenha o conteúdo do hover do card
        var content = $(this).find('.hover').html();

        // Insira o conteúdo no modal
        $('.modal-body').html(content);

        // Exiba o modal com animação de fade-in
        $('.modal').fadeIn();
      }
    });

    // Quando o botão de fechar do modal for clicado
    $('.close').click(function () {
      // Oculte o modal com animação de fade-out
      $('.modal').fadeOut();
    });
  }
});
