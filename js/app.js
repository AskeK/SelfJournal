
// Requires
const _ = require( './libaries/underscore/underscore_main.js' ),
      React = require( 'react' ),
      ReactDOM = require( 'react-dom' ),

      // Pages
      FrontPage = require( './pages/frontpage.js' );


// Styling
require( '../sass/index.scss' );

// Root
let root = _('#root').get(0);

// App Init
if ( 'app' == app_data.site_type ) { ReactDOM.render( <h1>This is the app site</h1>, root ); }

// Front page init
if ( 'frontpage' == app_data.site_type ) { ReactDOM.render( <FrontPage />, root ); }

// Page init
if ( 'page' == app_data.site_type ) { }

// 404 init
if ( '404' == app_data.site_type ) { }
