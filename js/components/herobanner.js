

// Requires
const React = require( 'react' ),
      _ = require( '../libaries/underscore/underscore_main.js' );

// Herobanner
class Herobanner extends React.Component {

    // Constructor
    constructor() {
        super();
        this.state = {
            title : 'Do more. Learn more.',
            subtitle : 'Gain more.'
        };

        window.addEventListener( 'load', () => {
            if ( _('.app-ss') !== false ) {
                setTimeout(() => {
                    _('.app-ss').css({ bottom: '370px', opacity: '1' });
                },300);
            }
        });
    }

    // Render
    render() {
        return (
            <div className="herobanner">
                <div className="content-container">
                    <div className="inner">
                        <div className="title">{ this.state.title }</div>
                        <div className="subtitle">{ this.state.subtitle }</div>
                    </div>

                    {/*<div style={{ backgroundImage : ( 'url(' + app_data.template_uri + '/sass/assets/app_ss.png)' ) }} className="app-ss"></div>*/}
                </div>
            </div>
        );
    }

} module.exports = Herobanner;
