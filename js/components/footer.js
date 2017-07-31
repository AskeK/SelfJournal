

// Require
const React = require( 'react' ),
      Globals = require( '../globals.js' ),
      _ = require( '../libaries/underscore/underscore_main.js' );

// Footer
class Footer extends React.Component {

    // Open login overlay
    openLoginOverlay() {
        Globals.hooks.trigger( 'openlogin' );
    }

    // Render
    render() {
        return (
            <footer className="footer">
                <div className="cta">
                    <div className="inner">
                        <span className="title">Start a happier, more productive life:</span>
                        <a href="#" className="cta-btn" onClick={ this.openLoginOverlay.bind(this) } >
                            <div className="icon">
                                <svg viewBox="0 0 32 28" >
                                    <use xlinkHref="#icon-user-plus">
                                    </use>
                                </svg>
                            </div>

                            <span className="text">Sign up, now.</span>
                        </a>
                    </div>
                </div>

                <div className="signature">
                    <div className="inner">
                        <svg className="icon" viewBox="0 0 32 32">
                            <use xlinkHref="#icon-signature" ></use>
                        </svg>
                        <a href="#" className="text">
                            Made by Aske K., Gren Design
                        </a>
                    </div>
                </div>
            </footer>
        );
    }

    // Component did mount
    componentDidMount() {

        let a = _('a');
        if ( a !== false ) {
            a.on('click', (( e ) => {
                e.preventDefault();
            }).bind(this));
        }

    }

} module.exports = Footer;
