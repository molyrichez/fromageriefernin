

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1420},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-demarche","displayName":"demarche","link":{"linkType":"LinkTypePage","href":"#!page-demarche"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-clients-pro","displayName":"clients-pro","link":{"linkType":"LinkTypePage","href":"#!page-clients-pro"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-actu","displayName":"actu","link":{"linkType":"LinkTypePage","href":"#!page-actu"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-404","displayName":"404","link":{"linkType":"LinkTypePage","href":"#!page-404"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-merci","displayName":"merci","link":{"linkType":"LinkTypePage","href":"#!page-merci"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
/* pastille eshop rotate on scroll */
$(function() {
  $('.rotate').scrollRotate()
})

/* parallaxe avec texte */
$(function() {
    $('.fixed')
    .each(function() {
        var parent = $(this).parent()
        var left = ($(this).offset().left + $(parent).position().left) / silex.scale
        var top = ($(this).offset().top) / silex.scale
        $(this)
        .css({
            'left': left,
            'top': top
        })
    })
    .appendTo(document.body)
    $('.scroll-fixed')
    .css({
        'position': 'relative',
        'overflow': 'hidden'
    })
    $('.scroll-fixed .website-width')
    .addClass('fixed')
    .each(function() {
        $(this)
        .css({
            'position': 'relative',
            'top': -$(this).offset().top
        })

        var parent = $(this).parent()
        parent.css('min-height', $(this).css('min-height'))
    })
})
