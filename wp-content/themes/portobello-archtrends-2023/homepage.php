<?php
//Template Name: Homepage
get_header();
wp_enqueue_script('newsletter-script', get_template_directory_uri() . '/assets/src/js/newsletter-script.js', array("jquery"),  true);
wp_enqueue_script('accordion-script', get_template_directory_uri() . '/assets/src/js/accordion.js', array("jquery"),  true);
wp_enqueue_script('navbar-script', get_template_directory_uri() . '/assets/src/js/navbar.js', array("jquery"),  true);
wp_enqueue_script('animation-gsap-script', get_template_directory_uri() . '/assets/src/js/animation-gsap.js', array("jquery"),  true);
wp_enqueue_script('btn-fixed-script', get_template_directory_uri() . '/assets/src/js/btn-Fixed.js', array("jquery"),  true);
wp_enqueue_script('modal-script', get_template_directory_uri() . '/assets/src/js/modal.js', array("jquery"),  true);
wp_enqueue_script('tilt-script', get_template_directory_uri() . '/assets/src/js/tilt.js', array("jquery"),  true);
wp_enqueue_script('reload-script', get_template_directory_uri() . '/assets/src/js/reload.js', array("jquery"),  true);

//banner animation






?>

<main class="viewport" id="section-banner">

    <?php require 'template-archtrends/navbar.php'; ?>

    <?php require 'template-archtrends/section-banner.php'; ?>

    <?php require 'template-archtrends/section-02.php'; ?>

    <?php require 'template-archtrends/section-03.php'; ?>

    <?php require 'template-archtrends/section-04.php'; ?>

    <?php require 'template-archtrends/section-05.php'; ?>

    <?php require 'template-archtrends/section-06.php'; ?>

    <?php require 'template-archtrends/section-07.php'; ?>

    <?php require 'template-archtrends/section-08.php'; ?>

    <?php require 'template-archtrends/section-09.php'; ?>

    <?php require 'template-archtrends/section-10.php'; ?>

    <?php require 'template-archtrends/btnFixed.php'; ?>
</main>
<?php get_footer(); ?>