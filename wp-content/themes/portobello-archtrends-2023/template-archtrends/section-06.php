<section class="section06 px-16" id="section06">
    <h3 class="titleSection06">
        Notícias sobre o <strong>Archtrends Summit 2023</strong>
    </h3>
    <div class="cards">
        <?php if (have_rows('card_noticia')) :
            while (have_rows('card_noticia')) : the_row(); ?>
                <div class="card">
                    <svg class="svgCard svgCardHover" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.78936 0.180859H25.3226L25.3226 21.7141H17.7364V13.1313L5.97318 24.8946L0.608924 19.5303L12.3722 7.76706L3.78936 7.76707L3.78936 0.180859Z" fill="#EC008C" />
                    </svg>
                    <img class="imgCard" src="<?php the_sub_field("image_card_noticia") ?>" alt="">
                    <p class="titleCard"><?php the_sub_field("titulo_card_noticia") ?></p>
                    <a class="learnMore" href="<?php the_sub_field("link_card_noticia") ?>" target="_blank"><?php the_sub_field("label_card_noticia") ?></a>
                </div>
        <?php endwhile;
        endif; ?>
    </div>
</section>