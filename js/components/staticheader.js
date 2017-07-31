

// Requires
const React = require( 'react' ),
      Globals = require( '../globals.js' );

// Static Header
class StaticHeader extends React.Component {

    // Constructor
    constructor() {

        super();
        this.state = {
            navelems : [
                <a href='#' key='nav#0'>Learn more</a>,
                <a href='#' key='nav#1' data-cta>Login</a>
            ]
        };

    }

    // On nav loaded
    onNavLoaded( data ) {

        // Error handling
        if ( data.constructor.name !== 'Array' ) return;

        // Formats data
        let response = [ ];
        for ( let n = 0; n < data.length; n++ ) {
            response.push(
                <a href={ data[n].href } key={ 'navelem#'+n } >{ data[n].text }</a>
            );
        }

        // Sets state
        this.setState({ navelems : response });

    }

    // Render
    render() {
        return (
            <header className="staticheader">
                <div className="inner">
                    <svg className="logo" viewBox="0 0 32 64" >
                        <use xlinkHref="#icon-logo"></use>
                    </svg>
                    <nav className="menu">
                        { this.state.navelems != null && this.state.navelems }
                    </nav>
                </div>
            </header>
        );
    }

    // Component did mount
    componentDidMount() {
        Globals.hooks.add( 'navloaded', this.onNavLoaded.bind(this) );
    }

    // Component will unmount
    componentWillUnmount() {
        Globals.hooks.remove( 'navloaded', this.onNavLoaded.bind(this) );
    }

} module.exports = StaticHeader;
