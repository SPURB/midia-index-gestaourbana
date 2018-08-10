<?php
/**
 * Sandbox
 *
 * @package     IndexGu
 * @since       1.0.0
 * @author      yubathom
 * @link        https://yubathom.co
 * @license     GNU General Public License 2.0+
 */

namespace IndexGu;

add_action( 'loop_start', __NAMESPACE__ . '\demo');

function demo(){
	// var_dump( get_the_ID() );
	// echo get_the_ID();
	// d( get_the_ID() );
}