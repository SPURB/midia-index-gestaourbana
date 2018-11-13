<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");

if(isset($_GET["data"])){
	include 'classes/Getter.php';
	$data = $_GET["data"];
	$response = new Getter($data);
	echo $response->getRoute($data);
}
else {
	$endpoints = array(
		// 'descrição' => '/endpoint'
		'listar todos os projetos'  => '/?data=projetos',
		"listar parâmetros de cada projeto (apenas id's 1, 2 e 3)" => '/?data=projeto/id'
	);
	echo json_encode($endpoints); 
}
