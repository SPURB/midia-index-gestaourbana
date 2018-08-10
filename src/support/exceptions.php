<?php
/**
 * Exception handling
 *
 * @package     IndexGu
 * @since       1.0.0
 * @author      yubathom
 * @link        https://yubathom.co
 * @license     GNU General Public License 2.0+
 */

namespace IndexGu;

use \Whoops\Handler\PrettyPageHandler;
use \Whoops\Run;

add_action( 'init', __NAMESPACE__ . '\load_whoops', 1 );

/**
* Load whoops
* @since 1.0.0
* @return void
*/
function load_whoops(){
	$whoops = new Run();
	$error_page = new PrettyPageHandler();
	$error_page->setEditor('sublime');
	$whoops->pushHandler( $error_page );
	$whoops->register();
}