$('.button-detail, .close').on('click', function (e) {
    e.preventDefault()
    $('.detail, html, body').toggleClass('open')
});

$('.nav-btn-icon, .nav-btn-close').on('click', function (e) {
    e.preventDefault()
    $('.menu-nav-mobile').toggleClass('menu-open')
});
$('#btn-unggah').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('button-active')
    $('#btn-cari').removeClass('button-active')
    $("#unggah").css('display', 'block')
    $("#cari").css('display', 'none')
})
$('#btn-cari').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('button-active')
    $('#btn-unggah').removeClass('button-active')
    $("#unggah").css('display', 'none')
    $("#cari").css('display', 'block')
})
$(document).ready(function () {
    $('#table-wisata, #table-sumber').DataTable({
        "pageLength": 5,
        "lengthMenu": [
            [5, 10, 20, -1],
            ['5 rows', '10 rows', '20 rows', 'Show all']
        ]
    });
    $('.input-cari-trayek').select2();
});



