<?php

// Init action
add_action( 'init', function() {
    show_admin_bar( false );
});

// WP enqueue scripts
add_action( 'wp_enqueue_scripts', function() {

    // App Data
    $site_type = is_page_template( 'app' ) ? 'app' : ( is_front_page() ? 'frontpage' : '404' );

    // Registers the main app script, and localizes data
    wp_register_script( 'app', get_template_directory_uri() . '/js/bundle.js' );
    wp_localize_script( 'app', 'app_data', array(
        'site_type' => $site_type,
        'template_uri' => get_template_directory_uri()
    ));

    // Enqueues fonts
    wp_enqueue_style( 'josefinsans', 'https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,700' );

});

// WP Footer
add_action( 'wp_footer', function() {
    wp_enqueue_script( 'app' );
});
