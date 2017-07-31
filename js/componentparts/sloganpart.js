

// Requires
const React = require( 'react' );

// Slogan Part
class SloganPart extends React.Component {

    // Render
    render() {
        return (
            <div className="sloganpart" style={{ left : this.props.left+'%' }}>
                <svg className="icon" viewBox={ this.props.data.viewBox } >
                    <use xlinkHref={ this.props.data.icon } ></use>
                </svg>

                <div className="title">{ this.props.data.title != null && this.props.data.title }</div>
                <div className="subtitle">{ this.props.data.subtitle != null && this.props.data.subtitle }</div>
            </div>
        );
    }

} module.exports = SloganPart;
