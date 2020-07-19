<?php
if (!isset($_COOKIE['dwlURL']) || !isset($_GET['ext'])) {
    return;
}
$link = $_COOKIE['dwlURL'];
$ext = $_GET['ext'];
$title = $_COOKIE['ttl'];

setcookie('dwlURL', '', time() - 3600000);
setcookie('ttl', '', time() - 3600000);

$title .= '.' . $ext;
// echo str_replace(' ', '-', $title);
header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"${title}\"");
echo readfile($link);
