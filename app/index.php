<?php
include ('config.php');

$link = mysqli_connect($host, $user, $pswd) 
    or die("Ошибка " . mysqli_error($link));
    echo $_SERVER['SERVER_NAME']
?>