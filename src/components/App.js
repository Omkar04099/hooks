import {Switch, Route} from 'react-router-dom';
import {CreatePost, PostDetail, Home, Navbar} from './'; 
import {StyleRoot} from 'radium';


function App() {
  return (
    <StyleRoot>
    <div className="container">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/post/:postId' component={PostDetail}/>
          <Route exact path='/create-post' component={CreatePost}/>
        </Switch>
    </div>
    </StyleRoot>
  );
}

export default App;
