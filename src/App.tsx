import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Spacer from './components/Spacer';


function App() {

  const [posts, setPosts] = useState([]);

  const handleClick = async () => {
    const resp = (await axios.get("https://jsonplaceholder.typicode.com/posts")).data;
    setPosts(resp);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <div>
            カウンター：<Counter />
          </div>
        </div>
        <Spacer />
        <div>
          <div>API：</div>
          <button data-testid="get-api" onClick={handleClick}>データ取得</button>
          <div data-testid="posts" id="posts">
            {
              posts.map((post: any, index: number) => {
                return (
                  <div className='post' key={index}>{post.id}</div>
                )
              })
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
