<?php
namespace App;

/**
 * Admin Pages Handler
 */
class Admin {

	public function __construct() {
		add_action( 'admin_menu', [ $this, 'admin_menu' ] );
	}

	/**
	 * Register our menu page
	 */
	public function admin_menu() {
		global $submenu;

		$capability = 'manage_options';
		$slug       = 'indexador-gestao-urbana';

		$hook = add_menu_page( __( 'Arquivos GU', 'textdomain' ), __( 'Arquivos GU', 'textdomain' ), $capability, $slug, [ $this, 'plugin_page' ], 'dashicons-text' );

		if ( current_user_can( $capability ) ) {
		    $submenu[ $slug ][] = array( __( 'Home', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/' );
		    $submenu[ $slug ][] = array( __( 'Projeto', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/projeto' );
		    $submenu[ $slug ][] = array( __( 'Configurações', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/configuracoes' );
		}

		add_action( 'load-' . $hook, [ $this, 'init_hooks'] );
	}

	/**
	 * Initialize our hooks for the admin page
	 */
	public function init_hooks() {
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
	}

	/**
	 * Load scripts and styles for the app
	 */
	public function enqueue_scripts() {
		wp_enqueue_style( 'baseplugin-admin' );
		wp_enqueue_script( 'baseplugin-admin' );
	}

	/**
	 * Render our admin page
	 */
	public function plugin_page() {
		echo '<div class="wrap"><div id="gu-index-admin"></div></div>';
		// echo '<script>var someGlobalData = "olar"</script>';
	}
}
