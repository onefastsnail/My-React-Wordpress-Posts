<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://www.onefastsnail.com
 * @since      1.0.0
 *
 * @package    My_React_Posts
 * @subpackage My_React_Posts/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    My_React_Posts
 * @subpackage My_React_Posts/public
 * @author     Paul Stewart <paul@onefastsnail.com>
 */
class My_React_Posts_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in My_React_Posts_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The My_React_Posts_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'assets/dist/css/main.css', array(), $this->version, 'all' );
		wp_enqueue_style('bootstrap_css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in My_React_Posts_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The My_React_Posts_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'assets/dist/react/app.js', array('jquery'), $this->version, true );

	}

	public function run_shortcode($atts){

		// extract(shortcode_atts(array(
	 //      'type' => 'posts',
	 //   ), $atts));

		$return = '<div id="my-react-posts"></div>';

		return $return;
	}

}
