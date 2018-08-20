<?php
namespace App;

/**
 * Shortcodes handler
 */
class Shortcodes {
	private $shortcode; //inputed shortcode 
	private $output = 'Some output to frontend';

	/**
	* @param string frontend
	*/
	public function __construct($shortcode) {
		if ($shortcode == 'frontend') {
			$this->shortcode = add_shortcode($shortcode, [$this, "frontEnd"]);
		}
	}

	/** 
	* Define this page type 
	 * Return string 
	 * The content inside
	 */
	public function frontEnd(){
		echo '<a href="#">'. $this->output . '</a>';
	}
}
