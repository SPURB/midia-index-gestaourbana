<?php
/*
@package IndexGu
Plugin Name: Midia Index Gestão Urbana
Plugin URI: http://github.com/spurb/midia-index-gestaourbana
Description: Indexador de arquivos do portal Gestão Urbana
Version: 1.0.0
Author: São Paulo Urbanismo e Secretaria de Desenvolvimento Urbano (SMUL)
Author URI: http://github.com/spurb
License: GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Text Domain: midia-index-gu
Domain Path: /languages
*/

namespace IndexGu;

if (! defined('ABSPATH') ){
	exit('Cheatin&8217;uh?');
}

require_once( __DIR__ . '/assets/vendor/autoload.php' );

add_action( 'init', __NAMESPACE__ . '\demo' );

function launch(){

}
