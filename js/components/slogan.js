

// Requires
const React = require( 'react' ),
      SloganPart = require( '../componentparts/sloganpart.js' );

// Slogan
class Slogan extends React.Component {

    // Constructor
    constructor() {
        super();
        this.state = {
            first : {
                viewBox : '0 0 32 32',
                icon : '#icon-cog',
                title : 'Do more',
                subtitle : 'Lorem ipsum dolor sit amet.'
            }, second : {
                viewBox : '0 0 32 32',
                icon : '#icon-book',
                title : 'Learn more',
                subtitle : 'Lorem ipsum dolor sit amet.'
            }, third : {
                viewBox : '0 0 32 34',
                icon : '#icon-hipster',
                title : 'Gain more',
                subtitle : 'Lorem ipsum dolor sit amet.'
            },
        };
    }

    // Render
    render() {
        return (
            <div className="slogan">
                <div className="content-container">
                    <div className="inner">
                        <SloganPart left={ 0 } data={ this.state.first } />
                        <SloganPart left={ 50 } data={ this.state.second } />
                        <SloganPart left={ 100 } data={ this.state.third } />
                    </div>
                </div>
            </div>
        );
    }

} module.exports = Slogan;
