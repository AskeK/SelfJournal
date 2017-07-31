

// Requires
const React = require( 'react' );

// Article
class Article extends React.Component{

    // Constructor
    constructor() {
        super();
        this.state = {

            title : 'Lorem ipsum dolor sit amet.',
            author : 'Aske K. Lange',
            date : '29. July - 2017',
            article : ( <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non, aliquam? Aliquam est impedit deserunt cupiditate, ducimus praesentium? Reprehenderit, possimus tempore perferendis nisi in quod eius quo ipsa quam saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non, aliquam? Aliquam est impedit deserunt cupiditate, ducimus praesentium? Reprehenderit, possimus tempore perferendis nisi in quod eius quo ipsa quam saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non, aliquam? Aliquam est impedit deserunt cupiditate, ducimus praesentium? Reprehenderit, possimus tempore perferendis nisi in quod eius quo ipsa quam saepe.</p>
                <p>Ducimus quaerat facilis provident quam. Sed voluptate eos qui reprehenderit eaque hic placeat quibusdam, eligendi provident accusantium vel beatae voluptatibus mollitia corporis enim nobis amet libero tempore optio. Non, recusandae.</p>
                <p>Dolorum perferendis facilis fuga blanditiis possimus tempore quisquam obcaecati error soluta dignissimos magnam voluptate a nesciunt, quas quam explicabo velit nulla doloremque molestiae iste beatae. Deleniti suscipit, necessitatibus obcaecati fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non, aliquam? Aliquam est impedit deserunt cupiditate, ducimus praesentium? Reprehenderit, possimus tempore perferendis nisi in quod eius quo ipsa quam saepe.</p>
            </div> )

        };
    }

    // Render
    render() {
        return (
            <article className="article">
                <div className="inner">
                <div className="top">
                    <svg className="icon" viewBox="0 0 32 64" >
                        <use xlinkHref="#icon-logo" />
                    </svg>

                    <div className="title">{ this.state.title }</div>
                    <div className="subtitle">
                        <span className="author">{ this.state.author }</span>-
                        <span className="date">{ this.state.date }</span>
                    </div>

                    <div className="social">
                        <a href="#" className="fb">
                            <svg className="fb-icon" viewBox="0 0 24 28" >
                                <use xlinkHref="#icon-fb"></use>
                            </svg>
                        </a>

                        <a href="#" className="twitter">
                            <svg className="twitter-icon" viewBox="0 0 24 28" >
                                <use xlinkHref="#icon-twitter"></use>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="bottom">
                    { this.state.article }
                </div>
                </div>
            </article>
        );
    }

} module.exports = Article;
