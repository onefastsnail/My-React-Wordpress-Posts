var React = require('react');
var ReactDOM = require('react-dom');
var PostsController = require('./components/Posts/PostsController');

//to listen to ajax request inject components
// $(document).on('DOMNodeInserted', function(e) {
//     if (e.target.id == 'react-posts') {
//        ReactDOM.render(
//          <PostsController/>,
//          e.target
//        );
//     }
// });

var postsEl = document.getElementById('my-react-posts');
 
if(postsEl != null){
  ReactDOM.render(
    <PostsController/>,
    postsEl
  );
}