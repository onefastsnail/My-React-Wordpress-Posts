# My React Posts

**Still in development, will add more comments soon! :)**

This plugin creates a shortcode that returns a React component which allows users to search and filter posts without page loads. 

It was made as an example for show some of my friends React, its ways, and its flow of data. Moving forward with this it could be better off in many ways to work in the WP plugin eco system but for now it will do the job intented, and i just wanted to share if anyone else was interested :)

## Requirements

* [https://wordpress.org/plugins/rest-api/](https://wordpress.org/plugins/rest-api/)

## Installation

1. Upload this into your `wp-content/plugins/` directory
2. run `npm install` inside this folder
3. run `gulp` inside this folder to build the assets
4. Activate the plugin through the 'Plugins' menu in WordPress
5. And Enjoy

# Usage

To use this you can simply use the following shortcode in your WP Admin content text area `[my-react-posts]`

## Development

When you want to develop this plugin further or wish to experiment with it, best fork it then follow the installation instructions. Once thats complete you can simply run `gulp` in the plugin root to build and watch project files.

I also added some basic Sass components and the gulpfile watches and compiles these, so ideal for changing to your needs.

## Project Details

* Using Bootstrap CDN so we can use Bootstrap for forms etc

#### API

This plugin activates and add a WP REST API endpoint for fetching posts for our React app.

* GET `/wp-json/wp/v2/posts?per_page=100`


#### Actions/Hooks/Filters

Coming soon.

## Tests

Coming Soon.

## Contributors

Paul Stewart


## License

License: GPLv2 or later

License URI: http://www.gnu.org/licenses/gpl-2.0.html
