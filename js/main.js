/*//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.
    function () {
        //Make the AJAX call
        $.ajax('http://api.tvmaze.com/singlesearch/shows?q=the+magicians&embed=episodes', {
            method: "GET",
            dataType: "json"
        })
        //After the data comes back, use this function
            .done(
                function (data) {
                    //Add the name
                    $('#name').append(data.name);
                    //Add the episodes
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
);*/

$(document).ready(
    $('button').click(
        function () {
            //Make the AJAX call
            $.ajax('http://api.tvmaze.com/singlesearch/shows?q=' + $('input').val(), {
                method: "GET",
                dataType: "json"
            })
            //After the data comes back, use this function
                .done(
                    function (data) {
                        //Add the name
                        $('#name').html(data.name);
                        //Add the episodes
                       // data.forEach(function (episode) {
                            $('#episodeList').html('<tr>'+
                                '<td><a href="' + data.officialSite + '"><img src="' + data.image.medium + '"></a></td>' +
                                '<td>' + data.rating.average + '</td>' +
                                '<td>' + data.runtime + '</td>' +
                                '<td>' + data.summary + '</td>' +
                                +' </tr>')
                        //})
                    })
        }
    )
);
