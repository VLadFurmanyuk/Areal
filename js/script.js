// ===== SPOILER MAIN PAGE ===== \\
$(document).on('click','.spoiler-btn',function(e){
    e.preventDefault();
    // $('.spoiler-arrow').toggleClass('active');
    $(this).parent().find('.stages__container__content__item_content').first().slideToggle(300);
    $(this).parent().find('.spoiler-arrow').toggleClass('active');
});
