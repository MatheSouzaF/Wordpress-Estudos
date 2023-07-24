<?php

// Admin functions here

// Ação para processar a submissão do formulário
add_action('wp_ajax_form', 'subscribe_newsletter');
add_action('wp_ajax_nopriv_form', 'subscribe_newsletter');

function subscribe_newsletter() {
    $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Configuração do e-mail de envio
        $to = 'matheusdsouza97@gmail.com';
        $subject = 'Nova inscrição na newsletter';
        $message = 'Um novo usuário se inscreveu na newsletter. E-mail: ' . $email;

        // Envio do e-mail
        $sent = wp_mail($to, $subject, $message);

        if ($sent) {
            echo json_encode(array('success' => true, 'message' => 'E-mail registrado com sucesso! Aguarde nosso contato.'));
        } else {
            echo json_encode(array('success' => false, 'message' => 'Ocorreu um erro ao processar a inscrição. Por favor, tente novamente mais tarde.'));
        }
    } else {
        echo json_encode(array('success' => false, 'message' => 'E-mail inválido!'));
    }
    wp_die();
}
