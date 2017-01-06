var React = require('react');
var PostStore = require('../../stores/PostStore');
var PostActions = require('../../actions/PostActions');

var Post = require('./Post');
var Button = require('../Button');

var PostsController = React.createClass({

  //within the construct lets get our filter from the store, could be an action also
  getInitialState: function() {
      return {
          filter: PostStore.getFilter()
      };
  },

  //when we mount lets add a listener to the store so when it emits a change event, we then use the callback to trigger a state change here which causes our app to REACT booom! :D enjoy.
  componentDidMount: function(){
    PostStore.addChangeListener(this._onChange);

    //a listener for on sroll to give us an infinite scroll

    if(this.state.filter.infiniteScroll == true){
      window.addEventListener('scroll', this.handleScroll);
    }
    else {
      window.removeEventListener('scroll', this.handleScroll);
    }

  },
  componentWillUnmount: function(){
    PostStore.removeChangeListener(this._onChange);

    //a listender for on sroll to give us an infinite scroll
    window.removeEventListener('scroll', this.handleScroll);
  },

  _onChange: function(){
    this.setState({ filter: PostStore.getFilter() });
  },

  handleScroll: function(event) {

      if(jQuery(window).scrollTop() >= jQuery('#my-react-posts').offset().top + jQuery('#my-react-posts').outerHeight() - window.innerHeight - 200) {
        this.handleShowMore();
      }

  },

  //lets send an action to filter posts
  handleFilterChange: function(obj) {
      PostActions.filterPosts(obj);
  },

  handleQueryChange: function(e){
      this.handleFilterChange({'query': e.target.value, 'end': 6});
  },

  handleSortChange: function(e){
      this.handleFilterChange({'sortBy': e.target.value, 'end': 6});
  },

  handleClearFilter: function(e){
      this.handleFilterChange({'sortBy': 'newest', 'query': '', 'end': 6});
  },

  handleShowMore: function(){
      var end = this.state.filter.end + this.state.filter.perPage;
      this.handleFilterChange({'end': end});
  },

  handleScrollChange: function(e){

      if(this.state.filter.infiniteScroll == false){
        window.addEventListener('scroll', this.handleScroll);
        this.handleFilterChange({'infiniteScroll': true});
      }
      else {
        window.removeEventListener('scroll', this.handleScroll);
        this.handleFilterChange({'infiniteScroll': false});
      }

      
  },

  render: function(){

  	var posts = [];

    //lets create an array of post components to render
  	for (var i in this.state.filter.paginated) {
  		posts.push(React.createElement(Post, {key: this.state.filter.paginated[i].id, data: this.state.filter.paginated[i]}));
  	};

    //if we have no posts lets show a message
    if(posts.length == 0) {
      posts = <p className="text-center">No posts found</p>;
    }

    var showMore;

    //if we have more posts lets show a show more
    if(this.state.filter.filtered.length > this.state.filter.perPage && this.state.filter.end < this.state.filter.filtered.length){
      showMore = <p className="text-center"><br/><Button url="#" text="Show More" handleClick={this.handleShowMore}/></p>;
    }

    return (

      <section className="section">
          <div className="row">
              <div className="col-xs-12">

                  <h1>Posts that React</h1>
                  <p>Showing {this.state.filter.paginated.length} of {this.state.filter.filtered.length}</p>
                  
                  <form action="" className="form-inline">

                      <div className="form-group">
                        <label htmlFor="exampleInputName2">Name</label>
                        <input name="query" type="text" className="form-control" id="search" onChange={this.handleQueryChange} value={this.state.filter.query} />
                      </div>

                      <div className="form-group">
                        <label htmlFor="sort">Sort</label>
                        <select className="form-control" id="sort" value={this.state.filter.sortBy} onChange={this.handleSortChange}>
                            <option value='newest'>Newest</option>
                            <option value='alphabetically'>Alphabetically</option>
                        </select>
                      </div>

                      <div className="checkbox">
                          <label>
                            <input type="checkbox" onChange={this.handleScrollChange} /> infinite scroll
                          </label>
                      </div>

                      <Button url="#" text="Clear" handleClick={this.handleClearFilter}/>
                  </form>

              </div>
          </div>
          <div className="row h-no-gutter">
              {posts} {showMore}
          </div>
      </section>

    )
  }
});

module.exports = PostsController;