

// Requires
const React = require( 'react' ),
      Herobanner = require( '../components/herobanner.js' ),
      StaticHeader = require( '../components/staticheader.js' ),
      Slogan = require( '../components/slogan.js' ),
      Article = require( '../components/article.js' ),
      Footer = require( '../components/footer.js' ),

      Globals = require( '../globals.js' ),
      LoginOverlay = require( '../components/loginoverlay.js' );

// Front page
class FrontPage extends React.Component {

    // Constructor
    constructor( ) {

        super();
        this.state = {
            loginoverlay : false,
        };

        Globals.hooks.add( 'openlogin', this.openLoginOverlay.bind(this) );
        Globals.hooks.add( 'closelogin', this.closeLoginOverlay.bind(this) );

    }

    // Open login
    openLoginOverlay() {
        this.setState({ loginoverlay : true });
    }

    // Close login
    closeLoginOverlay() {
        this.setState({ loginoverlay : false });
    }

    // Render
    render( ) {
        return (
            <div id="maincontainer">

                <StaticHeader />
                <Herobanner />
                <Slogan />
                <Article />
                <Footer />

                { this.state.loginoverlay && <LoginOverlay /> }

            </div>
        );
    }

} module.exports = FrontPage;
