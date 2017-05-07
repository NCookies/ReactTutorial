import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
    const { dispatch, selectedReddit } = this.props;
    // this.props에는 selectedReddit, posts, dispatch 등의 다양한 속성이 있음
    // 변수를 선언할 때 {} 를 사용하면 dict 처럼 같은 변수에 할당됨
    // 위에 경우, dispath, selectedReddit에 this.props에 각각 해당하는 값이 들어감
    // var, let, const에 상관없이 모두 같음

    dispatch(fetchPostsIfNeeded(selectedReddit));
    // /* action을 return 받아서 dispatch를 통해 reducer에 action을 날림 */
    // 위 주석은 잘못된 내용임.
    // dispatch란 action을 통해 store에 날려서 어떤 변화가 일어나야할지 알려주는 역할
    // 그리고 store에서는 dispatch를 통해 보내진 action으로 어떤 reducer를 사용해야하는지 선택함

    // 이 부분은 mapDispatchToProps를 통해 대체할 수 있을 듯

    // selectedReddit은 아마 reddit의 주제인 것 같음
    // 여기서는 frontend와 reactjs가 있음
  }

  componentWillReceiveProps(nextProps) {
    // 상태값이 바뀐다면
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit));
    }
  }

  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedReddit } = this.props;
    dispatch(invalidateReddit(selectedReddit)); // didInvalidate를 true로 설정함
    dispatch(fetchPostsIfNeeded(selectedReddit));   // 무조건 데이터를 fetch 해야함
  }

  render () {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker value={selectedReddit}
                onChange={this.handleChange}
                options={['reactjs', 'frontend']} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href='#'
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
        }
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
}

export default connect(mapStateToProps)(AsyncApp);
