<section class="section05" id="section05">
    <h3 class="titleSection04">participações</h3>
    <div id="palestrantes">
        <div class="grid">
            <?php if (have_rows('card_participante')) :
                while (have_rows('card_participante')) : the_row(); ?>
                    <?php
                    $hide_item = get_sub_field('class_none');
                    if ($hide_item) {
                        // Hide the div
                        echo '<div class="item -none"';
                        echo '</div>';
                    } else {
                        // Show the div
                        echo '<div class="item" id="card-item">';
                        echo '<img src="' . get_sub_field('image-card') . '" />';
                        echo '<div class="name">' . get_sub_field('titulo_card') . '</div>';
                        echo '<div class="hover">';
                        echo '<img src="' . get_sub_field('svg_hover_card') . '" alt="" class="icon">';
                        echo '<div>' . get_sub_field('descricao_hover_card') . '</div>';
                        echo '</div>';
                    }
                    ?>

        </div>

<?php endwhile;
            endif; ?>
    </div>
    </div>
    <p class="coming">E MAIS!</p>

    <p class="realization">realização</p>
    <section class="boxs d-flex flex-column">
        <div class="realizer realizers-01">
            <svg xmlns="http://www.w3.org/2000/svg" width="173" height="46" viewBox="0 0 173 32" fill="none">
                <path d="M102.049 8.06224C100.435 7.99494 98.8414 8.43832 97.4968 9.32864C96.1522 10.219 95.126 11.5104 94.5657 13.0173H94.4758V0.00725193L91.827 0.923332V31.3413H94.2668V27.0111H94.3494C94.9809 28.5194 96.0585 29.8011 97.4393 30.686C98.8201 31.571 100.439 32.0175 102.081 31.9662C108.673 31.9662 111.809 26.3875 111.809 19.993C111.809 13.5986 108.644 8.05861 102.05 8.05861L102.049 8.06224ZM102.05 29.6772C96.4222 29.6772 94.4466 24.7221 94.4466 20.0317C94.4466 15.3413 96.4222 10.379 102.05 10.379C107.087 10.379 109.145 15.3341 109.145 20.0317C109.145 24.7294 107.087 29.6772 102.05 29.6772ZM11.7858 0H0V31.3413H2.8541V17.8938H11.7894C17.1708 17.8938 20.6956 14.6041 20.6956 8.95053C20.6956 3.29693 17.1562 0.00725193 11.7894 0.00725193L11.7858 0ZM11.1613 15.3558H2.8541V2.54521H11.1467C15.0979 2.54521 17.822 4.64809 17.822 8.95053C17.822 13.253 15.0979 15.3558 11.1467 15.3558H11.1613ZM137.732 31.3413H140.373V0.00725193L137.732 0.923332V31.3413ZM145.665 31.3413H148.306V0.00725193L145.665 0.923332V31.3413ZM161.986 8.06224C155.416 8.06224 151.839 13.5406 151.839 20.0353C151.839 26.5301 155.416 31.9625 161.986 31.9625C168.557 31.9625 172.127 26.4842 172.127 19.9979C172.127 13.5116 168.557 8.06345 161.986 8.06345V8.06224ZM161.986 29.682C156.957 29.682 154.453 24.855 154.453 20.0366C154.453 15.2181 156.967 10.3911 161.986 10.3911C167.006 10.3911 169.507 15.2096 169.507 20.0366C169.507 24.8635 167.015 29.682 161.986 29.682ZM78.1373 8.06224C71.5664 8.06224 67.9894 13.4935 67.9894 19.9967C67.9894 26.4999 71.5664 31.9613 78.1373 31.9613C84.7081 31.9613 88.2779 26.483 88.2779 19.9967C88.2779 13.5104 84.7009 8.06224 78.1373 8.06224ZM78.1373 29.6808C73.1083 29.6808 70.6041 24.8538 70.6041 20.0353C70.6041 15.2169 73.1034 10.3899 78.1373 10.3899C83.1711 10.3899 85.6583 15.2084 85.6583 20.0353C85.6583 24.8623 83.1663 29.6808 78.1373 29.6808ZM31.349 8.06224C24.7781 8.06224 21.201 13.4935 21.201 19.9967C21.201 26.4999 24.7781 31.9613 31.349 31.9613C37.9198 31.9613 41.4896 26.483 41.4896 19.9967C41.4896 13.5104 37.9125 8.06224 31.349 8.06224ZM31.349 29.6808C26.32 29.6808 23.8158 24.8538 23.8158 20.0353C23.8158 15.2169 26.3151 10.3899 31.349 10.3899C36.3828 10.3899 38.8323 15.2084 38.8323 20.0353C38.8323 24.8623 36.3403 29.6808 31.349 29.6808ZM61.7927 8.72936V0.00725193L59.1512 0.923332V31.3413H61.7927V11.0039H67.9796L68.8775 8.67618L61.7927 8.72936ZM124.59 8.06224C117.676 8.06224 114.757 14.0687 114.757 20.0353C114.757 26.4757 117.673 32 124.59 32C129.896 32 132.748 29.2143 133.961 24.3958H131.287C130.367 27.4994 128.294 29.6808 124.551 29.6808C119.448 29.6808 117.419 24.8079 117.383 20.7798H134.132C134.341 14.4168 131.557 8.06103 124.553 8.06103L124.59 8.06224ZM117.384 18.4546C117.803 14.3346 120.213 10.3839 124.553 10.3839C128.893 10.3839 131.348 14.2633 131.478 18.4546H117.384ZM55.9411 8.67739C54.1605 8.57566 52.393 9.03472 50.8897 9.98934C49.3864 10.944 48.2238 12.3456 47.5672 13.995H47.4845V8.68344H45.0217V31.3413H47.7081V19.2558C47.7359 17.035 48.6299 14.9118 50.2013 13.3339C50.9598 12.572 51.8666 11.9721 52.8663 11.571C53.8661 11.1699 54.9376 10.9761 56.0152 11.0014H56.5316V8.66772L55.9411 8.67739Z" fill="#1B3561" />
            </svg>
            <p class="realizersDescription">Protagonista global de design e líder em revestimentos cerâmicos na América Latina, a Portobello promove o Archtrends Summit desde 2018, compartilhando inspiração e conhecimento com arquitetos e designers de interiores brasileiros.</p>
        </div>
        <div class="realizer realizers-02">
            <img src="/wp-content/themes/portobello-archtrends-2023/assets/img/polidesign.jpg" alt="">
            <p class="realizersDescription">Fundação de maior referência do design italiano, a Politecnico di Milano é um centro gerador de conhecimento de relevância internacional. Em uma parceria inédita, o Archtrends Summit 2023 conta com a curadoria da POLI.DESIGN, instituição da Politecnico que atua com empresas com foco em inovação.</p>
        </div>
    </section>

    <div class="modal -hidden">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-body">
            </div>
        </div>
    </div>

</section>