var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

//actions may contain the async code as once we have the data from a promise/request we will dispatch an event to the dispatcher to trigger the store listeners to then process etc
var PostActions = {
  filterPosts: function(data){
    AppDispatcher.handleAction({
      actionType: appConstants.POSTS_FILTER_POSTS,
      data: data
    });
  },
  getPosts: function(data){

    //simple jquery ajax request to get our data
    jQuery.ajax({
        url: '/wp-json/wp/v2/posts?per_page=100',
        method: 'GET',
        beforeSend:function(xhr){
          //do something before?
        },
        data:{}
    }).done(function(response){

        //dispatch an event to dispatcher
        AppDispatcher.handleAction({
           actionType: appConstants.POSTS_SET_POSTS,
           data: response
        });

    });
    
  },
};

module.exports = PostActions;