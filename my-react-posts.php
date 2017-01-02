<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://www.onefastsnail.com
 * @since             1.0.0
 * @package           My_React_Posts
 *
 * @wordpress-plugin
 * Plugin Name:       My React Posts
 * Plugin URI:        https://github.com/onefastsnail/My-React-Wordpress-Posts
 * Description:       Creates a shortcode React component that allows users to search and filter posts without page loads.
 * Version:           1.0.0
 * Author:            Paul Stewart
 * Author URI:        http://www.onefastsnail.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       my-react-posts
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-my-react-posts-activator.php
 */
function activate_my_react_posts() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-my-react-posts-activator.php';
	My_React_Posts_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-my-react-posts-deactivator.php
 */
function deactivate_my_react_posts() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-my-react-posts-deactivator.php';
	My_React_Posts_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_my_react_posts' );
register_deactivation_hook( __FILE__, 'deactivate_my_react_posts' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-my-react-posts.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_my_react_posts() {

	$plugin = new My_React_Posts();
	$plugin->run();

}
run_my_react_posts();
