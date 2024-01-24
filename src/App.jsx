import './App.css';
import LikePostRender from './Renderprops/LikePostRender';
import LikeImageHoc from './components/HOCs/LikeImageHoc';
import LikePostHoc from './components/HOCs/LikePostHoc';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageRender from './Renderprops/LikeImageRender';


function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h3>new</h3>
      <div className='buttons '>

        <LikeImageHoc/>
        <LikePostHoc/>
      </div>
      <h3>Render props</h3>
      <div className='buttons'>
        <LikeImageRender/>
        <LikePostRender/>
      </div>
    </div>
  
  );
}

export default App;