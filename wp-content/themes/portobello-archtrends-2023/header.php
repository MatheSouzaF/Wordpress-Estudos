<!DOCTYPE HTML>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<meta name="format-detection" content="telephone=no">
	<title><?php wp_title(); ?></title>
	<!-- <link rel="stylesheet" href="https://use.typekit.net/lpe8txe.css"> -->
	<link rel="stylesheet" href="https://use.typekit.net/lpe8txe.css">
	<link href="https://fonts.cdnfonts.com/css/helvetica-neue-5" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/portobello-archtrends-2023/assets/src/css/base.css" />
	<script>
		document.documentElement.className = "/wp-content/themes/portobello-archtrends-2023/assets/src/js";
		var supportsCssVars = function() {
			var e, t = document.createElement("style");
			return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
		};
		supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
	</script>



	<?php wp_head(); ?>

</head>

<body <?php body_class(""); ?>>