const initialState = {
	feed:[],
	offset:0,
	feedLoading:false,
	feedRefreshing:false
};

const FeedReducer = (state = initialState, action) => {

	// Alteração dos states
	/*if(action.type == 'changeName') {
		return { ...state, name:action.payload.name};
	}*/

	if(action.type == 'addLike') {
		let feed = state.feed;

		for(let i in feed) {
			if(feed[i].id == action.payload.id) {
				feed[i].like_count++;
				feed[i].is_liked = true;
			}
		}

		return { ...state, feed:feed};
	}

	if(action.type == 'removeLike') {
		let feed = state.feed;

		for(let i in feed) {
			if(feed[i].id == action.payload.id) {
				feed[i].like_count--;
				feed[i].is_liked = false;
			}
		}

		return { ...state, feed:feed};
	}

	if(action.type == 'clearFeed') {
		return { ...state, feed:[]};
	}

	if(action.type == 'incrementFeed') {
		return { ...state, feed:state.feed.concat(action.payload.feed)};
	}

	if(action.type == 'changeFeedLoadingStatus') {
		return { ...state, feedLoading:action.payload.status };
	}

	if(action.type == 'changeFeedRefreshingStatus') {
		return { ...state, feedRefreshing:action.payload.status };
	}

	return state;
}

export default FeedReducer;