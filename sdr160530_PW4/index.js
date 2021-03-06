$(document).ready(function() {
  $("#button").one("click", function() {
      ajaxLoading();
  });
});

function ajaxLoading() {
      $.ajax({
        url: "movies.xml",
        dataType: "xml",
        success: function(data) {
             $(data)
                .find("movie")
                .each(function() {
                    var gen = [], cast = [];
                    $(this).find("genre").each(function() {gen.push($(this).text());});
                    $(this).find("cast").find("person").each(function() {cast.push($(this).attr("name"));});

                    $("table").append("<tr>" +"<td>" +
                        $(this).find("title").text() +
                        "</td>" +"<td>" +
                        gen.join(", ") +
                        "</td>" +"<td>" +
                        $(this).find("director").text() +
                        "</td>" +"<td>" +
                        cast.join(", ") +
                        "</td>" +"<td>" +
                        $(this).find("imdb-info").find("synopsis").text() +
                        "</td>" +"<td>" +
                        $(this).find("imdb-info").find("score").text() +
                      "</td>" +"</tr>");
              });
        }
    });
}