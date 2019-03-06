//Run jQuery after the document is fully loaded.

$(document).ready(
    //The function that does the stuff.
    $('#show').click(
    function () {
        //Make the AJAX call
        $.ajax('http://api.tvmaze.com/singlesearch/shows?q='+ $(this).text() +'&embed=episodes', {
            method: "GET",
            dataType: "json"
        })
        //After the data comes back, use this function
            .done(
                function (data) {
                    //Add the name
                    $('#name').html(data.name);
                    //Add the episodes
                    $('#episode').show();
                    $('#show').hide();
                    $('#shows').hide();

                    data._embedded.episodes.forEach(function (episode) {
                        $('#episodeList').append('<tr>'+
                            '<td>' + episode.season + '</td>' +
                            '<td>' + episode.number + '</td>' +
                            '<td>' + episode.name + '</td>' +
                            '<td>' + episode.summary + '</td>' +
                            +' </tr>')
            })
        })
    }
    )
);

$(document).ready(
    $('button').click(
        function () {
            //Make the AJAX call
            $.ajax('http://api.tvmaze.com/search/shows?q=' + $('input').val(), {
                method: "GET",
                dataType: "json"
            })
            //After the data comes back, use this function
                .done(
                    function (data) {
                        //Add the name
                        //$('#name').html(data.name);
                        //Add the episodes
                        $('#show').show();
                        $('#episode').hide();
                        $('#episodeList').hide();
                        $('#shows').empty();

                       data.forEach(function (episode) {
                            $('#shows').append('<tr>'+
                                '<td><a href="' + episode.show.officialSite + '"><img src="' + episode.show.image.medium + '"></a></td>' +
                                '<td>' + episode.show.name + '</td>' +
                                '<td>' + episode.show.rating.average + '</td>' +
                                '<td>' + episode.show.runtime + '</td>' +
                                '<td>' + episode.show.summary + '</td>' +
                                +' </tr>')
                        })
                    })
        }
    )
);

$(document).ready(function () {
    $('#show').hide();
    $('#episode').hide();
});
