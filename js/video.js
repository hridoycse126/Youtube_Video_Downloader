
$(function () {

    $("#inURL").submit(function (e) {
        e.preventDefault();
        $('#a, #v').html('');
        var url = $("#txt_url").val();

        var oThis = $('#btn_fetch');
        oThis.attr('disabled', true);

        $('#s').css('margin-top', '3vh');
        $('#loader').fadeIn();

        $.get('video_info.php', {
            url: url
        }, function (data) {

            let title = data.title;
            oThis.attr('disabled', false);

            var links = data['links'];
            var error = data['error'];

            if (error) {
                alert('Error: ' + error);
                return;
            }
            dwlBtn(links);
            // first link with video
            var first = links.find(function (link) {
                return link['format'].indexOf('video') !== -1;
            });

            if (typeof first === 'undefined') {
                alert('No video found!');
                return;
            }

            var stream_url = 'stream.php?url=' + encodeURIComponent(first['url']);

            var video = $("video");
            video.attr('src', stream_url);
            video[0].load();
            $('#loader').fadeOut();
            $("#vContainer").fadeIn();
            $('.dwl-btn').click(function (e) {
                e.preventDefault();
                let url = $(e.target).data('url');
                document.cookie = "dwlURL=" + url + "; path=/";
                document.cookie = "ttl=" + title + "; path=/";
                let ext = $(e.target).data('ext');
                ext = ext == 'Unknown' ? 'webm' : ext;
                // window.location = 'dwl.php?ext=' + ext;
                window.open('dwl.php?ext=' + ext, '_blank');
            });
        });

    });
});

function dwlBtn(links) {
    links.forEach(link => {
        // console.log(link);
        var ext = 'Unknown', h = false, au = false;
        if (formats.hasOwnProperty(link.itag)) {
            let f = formats[link.itag];
            if (f.hasOwnProperty('ext')) {
                ext = f.ext;
            }
            if (f.hasOwnProperty('height')) {
                h = f.height;
            } else {
                au = true;
            }
        }
        let t = ext;
        t += h ? ' | ' + h : '';
        if (au) {
            $('#a').append("<tr>");
            $('#a').append("<td>" + t + "</td>");
            $('#a').append("<td class='text-center'><button class='dwl-btn btn' data-url='" + link.url + "' data-ext=" + ext + " type='button'></button></td>");
            $('#a').append("</tr>");
        } else {
            $('#v').append("<tr>");
            $('#v').append("<td>" + t + "</td>");
            $('#v').append("<td class='text-center'><button class='dwl-btn btn' data-url='" + link.url + "' data-ext=" + ext + " type='button'></button></td>");
            $('#v').append("</tr>");
        }
    });
}