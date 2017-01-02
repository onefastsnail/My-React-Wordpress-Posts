var React = require('react');
var Button = require('../Button');

var Post = React.createClass({

  componentDidMount: function(){},
  componentWillUnmount: function(){},

  render: function(){

    // var excerpt = this.props.data.content.rendered.replace(/(<([^>]+)>)/ig,"");
    // excerpt = excerpt.substring(0, 255);

    var heroBackgroundStyles = {
      backgroundImage: 'url(http://fakeimg.pl/650x650/eeeeee/666/?text='+this.props.data.ID+')'
    };

    return(

      <div className="col-xs-6 col-sm-4">
        <div className="c-hero">

            <div className="c-background-image" style={heroBackgroundStyles}></div>

            <div className="c-overlay"></div>

            <div className="c-hero__content">
                <p><small>{this.props.data.date}</small></p>
                <p><strong>{this.props.data.title.rendered}</strong></p>
                {<div dangerouslySetInnerHTML={{__html: this.props.data.excerpt.rendered}}></div>}
                <Button url={this.props.data.link} text="ReadMore"/>
            </div>

            <hr />

        </div>
      </div>

    );

  }
});

module.exports = Post;