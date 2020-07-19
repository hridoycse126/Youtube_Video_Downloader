<?php

require('vendor/autoload.php');

$url = isset($_GET['url']) ? $_GET['url'] : 'https://www.youtube.com/watch?v=74cVT_tUpck';

if (!$url) {
    die("No url provided");
}

$youtube = new \YouTube\YouTubeDownloader();
$links = $youtube->getDownloadLinks($url);
$title = $youtube->getTitle($url);

$error = $youtube->getLastError();

header('Content-Type: application/json');
echo json_encode([
    'links' => $links,
    'error' => $error,
    'title' => $title
], JSON_PRETTY_PRINT);

// echo $links[0]['url'];