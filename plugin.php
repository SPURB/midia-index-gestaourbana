<?php
/*
Plugin Name: Midia Index Gestão Urbana
Plugin URI: http://github.com/spurb/midia-index-gestaourbana
Description: Indexador de arquivos do portal Gestão Urbana
Version: 1.0.0
Author: São Paulo Urbanismo e Secretaria de Desenvolvimento Urbano (SMUL)
Author URI: http://github.com/spurb
License: GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Text Domain: baseplugin
Domain Path: /languages
*/

/**
 * Copyright (c) 2018 São Paulo Urbanismo (email: devspurbanismo@prefeitura.sp.gov.br). All rights reserved.
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * **********************************************************************
 */


// don't call the file directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Midia_Index_Gestao_Urbana class
 * @class Midia_Index_Gestao_Urbana The class that holds the entire Midia_Index_Gestao_Urbana plugin
 */
// header("Access-Control-Allow-Origin: *");

final class Midia_Index_Gestao_Urbana {
	/**
	 * Plugin version
	 * @var string
	 */
	public $version = '1.0.0';

	/**
	 * Holds various class instances
	 * @var array
	 */
	private $container = array();

	/**
	 * Constructor for the Midia_Index_Gestao_Urbana class
	 * Sets up all the appropriate hooks and actions
	 * within our plugin.
	 */
	public function __construct() {
		$this->define_constants();
		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
		add_action( 'plugins_loaded', array( $this, 'init_plugin' ) );
	}

	/**
	 * Initializes the Base_Plugin() class
	 * Checks for an existing Base_Plugin() instance
	 * and if it doesn't find one, creates it.
	 */
	public static function init() {
		header( "Access-Control-Allow-Origin: *" );
		header( 'Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE' );
		header( 'Access-Control-Allow-Credentials: true' );

		static $instance = false;

		if ( ! $instance ) {
			$instance = new Midia_Index_Gestao_Urbana();
		}

		return $instance;
	}

	/**
	 * Magic getter to bypass referencing plugin.
	 * @param $prop
	 * @return mixed
	 */
	public function __get( $prop ) {
		if ( array_key_exists( $prop, $this->container ) ) {
			return $this->container[ $prop ];
		}
		return $this->{$prop};
	}

	/**
	 * Magic isset to bypass referencing plugin.
	 * @param $prop
	 * @return mixed
	 */
	public function __isset( $prop ) {
		return isset( $this->{$prop} ) || isset( $this->container[ $prop ] );
	}

	/**
	 * Define the constants
	 */
	public function define_constants() {
		define( 'BASEPLUGIN_VERSION', $this->version );
		define( 'BASEPLUGIN_FILE', __FILE__ );
		define( 'BASEPLUGIN_PATH', dirname( BASEPLUGIN_FILE ) );
		define( 'BASEPLUGIN_INCLUDES', BASEPLUGIN_PATH . '/includes' );
		define( 'BASEPLUGIN_URL', plugins_url( '', BASEPLUGIN_FILE ) );
		define( 'BASEPLUGIN_ASSETS', BASEPLUGIN_URL . '/assets' );
	}

	/**
	 * Load the plugin after all plugins are loaded
	 */
	public function init_plugin() {
		$this->includes();
		$this->init_hooks();
	}

	/**
	 * Placeholder for activation function
	 * Nothing being called here yet.
	 */
	public function activate() {
		$installed = get_option( 'baseplugin_installed' );
		if ( ! $installed ) {
			update_option( 'baseplugin_installed', time() );
		}
		update_option( 'baseplugin_version', BASEPLUGIN_VERSION );
	}

	/**
	 * Placeholder for deactivation function
	 * Nothing being called here yet.
	 */
	public function deactivate() {}

	/**
	 * Include the required files
	 */
	public function includes() {
		require_once BASEPLUGIN_INCLUDES . '/class-assets.php';

		if ( $this->is_request( 'admin' ) ) {
			require_once BASEPLUGIN_INCLUDES . '/class-admin.php';
		}

		if( $this->is_request('shortcodes') ) {
			require_once BASEPLUGIN_INCLUDES . '/class-shortcodes.php';
		}
	}

	/**
	 * Initialize the hooks
	 *
	 */
	public function init_hooks() {
		add_action( 'init', array( $this, 'init_classes' ) );

		// Localize our plugin
		add_action( 'init', array( $this, 'localization_setup' ) );
	}

	/**
	 * Instantiate the required classes
	 */
	public function init_classes() {

		if ( $this->is_request( 'admin' ) ) {
			$this->container['admin'] = new App\Admin();
		}

		if ( $this->is_request( 'shortcodes' ) ) {
			$this->container['shortcodes'] = new App\Shortcodes('frontend');
		}
		$this->container['assets'] = new App\Assets();
	}


	/**
	 * Initialize plugin for localization
	 * @uses load_plugin_textdomain()
	 */
	public function localization_setup() {
		load_plugin_textdomain( 'baseplugin', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * What type of request is this?
	 * @param  string $type admin, ajax, cron or frontend.
	 * @return bool
	 */
	private function is_request( $type ) {
		switch ( $type ) {
			case 'admin' : return is_admin();
			case 'shortcodes' : return ( ! is_admin()); 
		}
	}


} // Midia_Index_Gestao_Urbana

$baseplugin = Midia_Index_Gestao_Urbana::init();