import instalogo from './assets/instalogo.png';
import facebooklogo from './assets/facebooklogo.png';
import logo from './assets/logo.png';
import image1 from './assets/image1.png';
import Product from '../src/Components/Product.jsx';
import hii from './assets/Book1.png';
import hello from './assets/Book2.png';
import everyone from './assets/Book3.png';
import './App.css';

function App() {

  return (
    <>
     <div>
      <header>
        <nav className='naving'>
          <img src={logo} alt="logo" height={40} width={90} />
          <div>
            <img src={instalogo} alt="insta" height={40} width={40}/>
            <img src={facebooklogo} alt="facaebook" height={40} width={40}/>
          </div>
        </nav>
      </header>
      <div className='container1'>
        <div className='image1'>
          <img src={image1} alt="image" height={700} width={700}/>
        </div>
        <div className='peras'>
          <h1>
            introduce your product
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/>
            et massa mi. Aliquam in hendrerit urna. Pellentesque sit<br/> 
            amet sapien fringilla, mattis ligula consectetur.
          </p>
          <br/>
          <h2>
            Sign up
          </h2>
          <div className='input'>
            <input type="text" placeholder='Name'/><br/>
            <input type='email' placeholder='Email'/><br/>
            <button>Sign up</button>
            </div>
        </div>
      </div>
      <div className='container2'>
        <div>
          <h2>
          About section
        </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Ut et massa mi. Aliquam in hendrerit urna.<br/> Pellentesque sit amet sapien fringilla, mattis ligula<br/> consectetur, ultrices mauris.
          </p>
        </div>
        <div className='p'>
          <p>
            Maecenas vitae mattis tellus. Nullam quis imperdiet<br/> augue. Vestibulum auctor ornare leo, non suscipit<br/> magna interdum eu. Curabitur pellentesque nibh<br/> nibh, at maximus ante fermentum sit amet. 
          </p>
        </div>
      </div>
      <div className='cards'>
        <Product img={hii}/>
        <Product img={hello}/>
        <Product img={everyone}/> //components use
      </div>
      <div className='container3'>
        <div>
        <h1>
          Get access
        </h1>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/>
            et massa mi. Aliquam in hendrerit urna. Pellentesque sit<br/> 
            amet sapien fringilla, mattis ligula consectetur.
          </p>
          </div>
            
          <div className='input'>
            <h2>
            Sign up
          </h2>
            <input type="text" placeholder='Name'/><br/>
            <input type='email' placeholder='Email'/><br/>
            <button>Sign up</button>
            </div>
      </div>
      <footer>
        <nav className='naving'>
          <img src={logo} alt="logo" height={40} width={90} />
          <div>
            <img src={instalogo} alt="insta" height={40} width={40}/>
            <img src={facebooklogo} alt="facaebook" height={40} width={40}/>
          </div>
        </nav>
      </footer>
     </div>
    </>
  )
}

export default App
