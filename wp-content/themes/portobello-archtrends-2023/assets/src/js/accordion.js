$(function () {
  $('.acc__title').click(function (j) {

    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  // $(document).ready(function () {
  //   $("form").submit(function (event) {
  //     event.preventDefault();
  //     var formData = {
  //       email: $("#email").val(),
  //     };

  //     $.ajax({
  //       type: "POST",
  //       url: "/wp-content/themes/portobello-archtrends-2023/template-archtrends/submitForm.php",
  //       data: formData,
  //       dataType: "json",
  //       encode: true,
  //     }).done(function (data) {
  //       console.log(data);
  //     });

  //     event.preventDefault();
  //   });
  // });


});
