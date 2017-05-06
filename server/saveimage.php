<?php header("Access-Control-Allow-Origin: *"); ?>
<?php
	$img = $_POST['img'];
	$img = str_replace('data:image/jpeg;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);

	$file = 'images/'.rand() . '.jpg';
	$success = file_put_contents($file, $data);

	echo $success;
?>