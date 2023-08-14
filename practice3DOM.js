// Посмотрим содержимое выбранного элемента
// $('селектор').html();

// $(function () {
//     alert($('h3').html());
// } )
//
// $(function () {
//     alert($('h3').text());
// } )
//
// $(function () {
//     $('a').click(function (event) {
//     alert(event.type);
//     alert('Посещение социальных сетей мешает изучению jQuery. Доступ запрещён.');
//     event.preventDefault();
// });
// });
//
// $('div').click(function (){
//     let element = $(this).html();
//     alert(element);
// });

// Изменим содержимое выбранного элемента
// $('селектор').html('Новое содержимое');

$('#but1').click(function() {
    $('.article-text').html('jQuery — библиотека JavaScript, содержащая в себе готовые функции языка JavaScript все операции jQuery выполняются из кода JavaScript. Библиотека jQuery производит манипуляции с html-элементами, управляя их поведение и используя DOM для изменения структуры веб-страницы.');
});

// Добавим указанный класс выбранному элементу
// $('селектор').addClass('имяКласса');
// Удалим указанный класс у выбранного элемента
// $('селектор').removeClass('имяКласса');
// При первом вызове указанный класс будет добавлен, а втором – удалён
// $('селектор').toggleClass('имяКласса');

$('#but2').click(function(event) {
    $('.active').removeClass('active');
    $(event.target).addClass('active');
});

$('#but3').click(function(event) {
    $('a').html(Date())
    $('.active').removeClass('active');
    $(event.target).addClass('active');
});

// Добавим текст после внутреннего содержимого элемента
// $('селектор').append('произвольныйТекст');
// Добавим текст перед внутренним содержимым элемента
// $('селектор').prepend('произвольныйТекст');

$('h3').click(function () {
    $('h3').append('<div style="font-weight:200; font-size: 16px;">jQuery — библиотека JavaScript, содержащая в себе готовые функции языка JavaScript все операции jQuery выполняются из кода JavaScript. Библиотека jQuery производит манипуляции с html-элементами, управляя их поведение и используя DOM для изменения структуры веб-страницы.</div>');
} );

// Узнаём значение произвольного атрибута
// $('селектор').attr('атрибут');
// Установим новое значение произвольному атрибуту
// $('селектор').attr('атрибут', 'новое значение');
// Удалим атрибут
// $('селектор').removeAttr('атрибут');

$('#but4').click(function(event) {
    alert($('a').attr('href'));
    $('.article-list').attr('type', 'square');
    $('a').removeAttr('title');
    $('.active').removeClass('active');
    $(event.target).addClass('active');
});

// Обернём тегом
// $('селектор').wrap('<нач_тэг><кон_тэг>');

$('.article-list').click(function(event) {
    $(event.target).wrap('<del></del>')
})
