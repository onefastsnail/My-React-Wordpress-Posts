var React = require('react');

var Post = React.createClass({

  componentDidMount: function(){},
  componentWillUnmount: function(){},

  render: function(){

    var heroBackgroundStyles = {
      backgroundImage: 'url(http://fakeimg.pl/650x650/eeeeee/666/?text='+this.props.data.id+')'
    };

    return(

        <div className="c-small-post">

            <div className="c-small-post__image">
                <a href={this.props.data.link} title="{this.props.data.title.rendered}" className="h-full-cover"><div className="c-background-image" style={heroBackgroundStyles}></div></a>
            </div>

            <div className="c-small-post__content">

              <p className="c-small-post__date">{this.props.data.date}</p>

                <h3 className="c-small-post__title"><a href={this.props.data.link} title="{this.props.data.title.rendered}">{this.props.data.title.rendered}</a></h3>

                {<div className="c-wysiwyg-html" dangerouslySetInnerHTML={{__html: this.props.data.excerpt.rendered}}></div>}

            </div>

        </div>

    );

  }
});

module.exports = Post;