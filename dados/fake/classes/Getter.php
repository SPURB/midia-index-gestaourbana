<?php
class Getter{
	public function getRoute($d){
		$out = new stdClass();
		switch ($d) {
			case 'projetos': $out = json_decode(file_get_contents("json/projetos.json")); break;
			case 'projeto/1': $out = json_decode(file_get_contents("json/projeto/1.json")); break;
			case 'projeto/2': $out = json_decode(file_get_contents("json/projeto/2.json")); break;
			case 'projeto/3': $out = json_decode(file_get_contents("json/projeto/3.json")); break;
			default: $out = 'recurso não encontrado'; break;
		}
		return json_encode($out);
	}
}
