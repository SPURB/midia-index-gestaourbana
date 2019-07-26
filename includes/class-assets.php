<?php
namespace App;

/**
 * Scripts and Styles Class
 */
class Assets {
	function __construct() {
		if ( is_admin() ) {
			add_action( 'admin_enqueue_scripts', [ $this, 'register' ], 5 );
		} else {
			add_action( 'wp_enqueue_scripts', [ $this, 'register' ], 5 );
		}
	}

	/**
	 * Register our app scripts and styles
	 * @return void
	 */
	public function register() {
		$this->register_scripts( $this->get_scripts() );
	}

	/**
	 * Register scripts
	 * @param  array $scripts
	 * @return void
	 */
	private function register_scripts( $scripts ) {
		foreach ( $scripts as $handle => $script ) {
			$deps      =  false; //isset( $script['deps'] ) ? $script['deps'] : false;
			$in_footer = isset( $script['in_footer'] ) ? $script['in_footer'] : false;
			$version   = isset( $script['version'] ) ? $script['version'] : BASEPLUGIN_VERSION;

			wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );
		}
	}

	/**
	 * Get all registered scripts
	 * @return array
	 */
	public function get_scripts() {
		// $prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '.min' : '';
		
		$scripts = 
			[
			'baseplugin-admin' => [
				'src'       => BASEPLUGIN_ASSETS . '/dist/admin.min.js',
				'version'   => filemtime( BASEPLUGIN_PATH . '/assets/dist/admin.min.js' ),
				'in_footer' => true
			]
		];
		return $scripts;
	}
}
