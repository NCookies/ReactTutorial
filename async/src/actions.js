import fetch from 'isomorphic-fetch';

// 액션 타입
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

// 액션 생성자
export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit  // reddit 주제 (reactjs, frontend)
  };
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  };
}

function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  };
}

function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

// 즉, fetchPosts와 fetchPostsIfNeeded는 thunk임
function fetchPosts(reddit) {   // 비동기 통신은 reducer가 아니라 action에서 처리하는건가?
                                // 그런 듯
  return dispatch => {
    dispatch(requestPosts(reddit)); // 통신이 시작됨을 알림
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
        // 문자열에서 js 변수를 사용하기 위한 문법
        // template literals 참고
        // reddit: frontend OR reactjs
      .then(req => req.json())
      .then(json => dispatch(receivePosts(reddit, json)));  // 통신이 끝났음을 알림
      // 이 부분은 나중에 async/await로 대체하면 될 듯
  }
}

/*
복잡도를 줄이기 위한 helper 함수임
reddit으로부터 데이터를 얻어와야 하는지 판별하는 함수
덕분에 불피요한 통신을 줄일 수 있음
그렇기 때문에 reacjs와 frontend를 모두 선택하면 네트워크 통신이 발생하지 않음
(REQUEST_POSTS, RECEIVE_POSTS)
시간이 오래되어 새로고침이 필요하기 전에는 계속해서 false 반환
*/
function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit];    // 기존에 받아온 값
  if (!posts) { // 이전에 reddit에서 받아온 데이터가 없으면 truen 반환
    return true;
  } else if (posts.isFetching) {    // isFetching은 현재 통신이 이루어지고 있다는 의미임
    return false;   // REQUEST를 한 후 아직 RECEIVE를 받지 않았을 떄 false 반환
  } else {  // 데이터도 있고, 통신 중이지도 않을 때
    return posts.didInvalidate; // 데이터가 오래 되었을 때 사용하는 boolean 변수
                                // 만약 데이터가 오래되었다면(didInvalidate is true)
                                // true를 반환하여 값을 갱신하게 됨
                                // 그렇지 않다면 아무것도 하지 않음
  }
}

/*
중요 :
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
The inner function receives the store methods dispatch and getState as parameters.
https://github.com/gaearon/redux-thunk#motivation 참고
*/
export function fetchPostsIfNeeded(reddit) {    // reddit: frontend OR reactjs
  return (dispatch, getState) => {  // dispatch는 action을 날리는 역할
                                    // 도대체 dispatch와 getState 인자는 어디서 나오는 것인가?
                                    // getState는 아마 상태 트리를 반환하는 함수일 듯
    if (shouldFetchPosts(getState(), reddit)) { // 이전에 받아온 데이터가 없거나 갱신이 필요할 때
      return dispatch(fetchPosts(reddit));
      /*
      Any return value from the inner function will be available
      as the return value of dispatch itself.
      This is convenient for orchestrating an asynchronous control flow
      with thunk action creators dispatching each other and
      returning Promises to wait for each other’s completion
      */
    }
  };
}
