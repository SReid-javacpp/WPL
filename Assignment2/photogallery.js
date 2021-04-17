var page;
$(document).ready(function () {
    $.ajax({
        url: './js/data.json',
        crossDomain: true,
        dataType: "json",
        success: function (result) {
            console.log('successful load on data.json');
            page = result;
            page.forEach(element => { populateImages(element); });
        },
        error: function (e) {
        }
    });


    $(document).on('mouseenter', 'img', function (e) {
        $(this).addClass('gray');
        var img = page.find(e => { return e.title === $(this).attr('alt')});
        var breaks = "<br />";
        $(document.body).append(
            '<div id="preview">' +  
                '<img src="' + $(this).attr('src').replace('square', 'medium') + '"' +' alt = "' + $(this).attr('alt') + '"' + '> ' + 
                '<p>' + $(this).attr('alt') + breaks + img.city + ' ' + img.country + ' ' + img.taken + '</p>' + 
            '</div>'
            );
        $('#preview').css({"left": e.pageX, "top": e.pageY });
        $('#preview').fadeIn(1000);
    });

    $(document).on('mouseleave', 'img', function () {
        $(this).removeClass('gray');
        $('#preview').remove();
    });

    $(document).on('mousemove', document, function (e) {
        $('#preview').offset({ left: e.pageX, top: e.pageY + 20 });
    });
});

function populateImages(image) {
    $('#imgContainer').append('<img src="images/square/' + image['path']+ '"' +' alt = "' + image['title'] + '"' + '> ');
}