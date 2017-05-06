<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
	$img = $_POST['img'];
	$img = str_replace('data:image/jpeg;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	try {
		file_put_contents('./hello.jpg', $data);
	catch (Exception $e) {
		$msg = "Exception " . $e->getCode() . " / " . $e->getMessage();
		echo $msg;
	}
?>