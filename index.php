<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>youtube-downloader</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="js/formats.js"></script>
    <script src="js/video.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <div class="row align-items-center" id="s" style="margin-top: 35vh;">
            <div class="col-12">
                <h1 class="text-muted text-center mb-3">
                    YouTube Downloader
                </h1>
                <form method="post" id="inURL" class="d-flex flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-center">
                    <input type="text" id="txt_url" placeholder="Paste / Type video URL" class="form-control-plaintext border rounded-pill px-4 py-3" required>
                    <button id="btn_fetch" class="btn btn-primary font-weight-bold rounded-pill px-3 py-2" type="submit">
                        FETCH
                    </button>
                </form>
            </div>
        </div>
        <div class="row mt-3" id="loader" style="display:none;">
            <div class="col-12 text-center">
                <div class="spinner-border">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        <div class="row justify-content-center" style="display:none;" id="vContainer">
            <div class="col-md-8 col-11 mt-3">
                <video class="w-100" controls>
                    <source src="" type="video/mp4" />
                    <em>Sorry, your browser doesn't support HTML5 video.</em>
                </video>
            </div>
            <div class="col-md-4 col-11 mt-3">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Video</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Audio</a>
                    </div>
                </nav>
                <div class="tab-content bg-light" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <table id="v" class="table w-100"></table>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <table id="a" class="table w-100"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>

</html>