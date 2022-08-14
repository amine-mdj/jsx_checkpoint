import logo from './logo.svg';
import './App.css';
import myimage from "./imageInSrc.jpeg"

  

function App() {
  const element = <h1 class="title red">Your name here</h1>;
  const image_src = <img src={myimage} />;
  const image_public = <img src="/imageInPublic.jpeg" />;
  
  return (

    
    <div>
      {element}
      <br/>
      {image_src}
      <br/>
      {image_public}
      <br/>
     <video width="320" height="240" controls>
     <source src="myVideo.mp4" type="video/mp4" />
     </video>
    </div>
    
  );
}

export default App;
