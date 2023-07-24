jQuery(document).ready(function($) {
    $('#newsletter-form').submit(function(event) {
        event.preventDefault();
        const email = $('input[name="email"]').val();

        // Realiza a chamada AJAX para o backend do WordPress
        $.ajax({
            url: ajax_object.ajax_url,
            method: 'POST',
            data: {
                action: 'subscribe_newsletter',
                email: email,
                security: ajax_object.security // Adicione o nonce de segurança
            },
            dataType: 'json',
            success: function(data) {
                if (data.success) {
                    $('#newsletter-message').html('<p class="success">' + data.message + '</p>');
                    $('#newsletter-form')[0].reset();
                } else {
                    $('#newsletter-message').html('<p class="error">' + data.message + '</p>');
                }
            },
            error: function(error) {
                console.error('Erro na chamada AJAX:', error);
                $('#newsletter-message').html('<p class="error">Ocorreu um erro ao processar a inscrição. Por favor, tente novamente mais tarde.</p>');
            }
        });
    });
});
