

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1420},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-demarche","displayName":"demarche","link":{"linkType":"LinkTypePage","href":"#!page-demarche"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-clients-pro","displayName":"clients-pro","link":{"linkType":"LinkTypePage","href":"#!page-clients-pro"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-actu","displayName":"actu","link":{"linkType":"LinkTypePage","href":"#!page-actu"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-404","displayName":"404","link":{"linkType":"LinkTypePage","href":"#!page-404"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-merci","displayName":"merci","link":{"linkType":"LinkTypePage","href":"#!page-merci"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
elem.scrollRotate();

$(function() {
    $('.silex-runtime .scroll-fixed .website-width')
    .addClass('fixed')
    .each(function() {
        $(this)
        .css('top', -$(this).offset().top)
    })
})