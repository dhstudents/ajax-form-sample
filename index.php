<?php
require_once 'Cars.php';
echo "<pre>";
print_r($_GET);
echo "<hr>";
print_r($_POST);
echo "<hr>";

// print_r($url);

// echo "</pre>";
$url = explode('/' , $_GET['url']);
$controller = $url[0];
$action = $url[1];

$obj = new $controller();
$data =$obj->{$action}();

echo $data;
