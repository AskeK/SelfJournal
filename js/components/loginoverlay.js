

// Requires
const React = require( 'react' ),
      Globals = require( '../globals.js' );

// Login Overlay
class LoginOverlay extends React.Component {

    // Close
    close() { Globals.hooks.trigger( 'closelogin' ); }

    // Render
    render() {
        return (
            <div className="login-overlay">
                <div className="window">

                    <div className="head">
                        <div className="close" onClick={ this.close.bind(this) }></div>
                    </div>

                    <div className="body">

                        <svg className="logo" viewBox="0 0 32 64" >
                            <use xlinkHref="#icon-logo"></use>
                        </svg>

                        <div className="title">Login or</div>
                        <div className="subtitle">Register</div>

                        <form className="loginform">

                            <div className="field-container">
                                <div className="icon">
                                    <svg viewBox="0 0 20 28">
                                        <use xlinkHref="#icon-user" ></use>
                                    </svg>
                                </div>

                                <input type="text" className="user loginfield" name="user" />
                            </div>

                            <div className="field-container">
                                <div className="icon">
                                    <svg viewBox="0 0 18 28">
                                        <use xlinkHref="#icon-lock"></use>
                                    </svg>
                                </div>

                                <input type="password" className="pass loginfield" name="pass" />
                            </div>

                            <div className="submits">
                                <button className="register btn">Register</button>
                                <button className="login btn">Login</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        );
    }

} module.exports = LoginOverlay;
