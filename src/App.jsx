import Navbar from "./Navbar";
import EmojiSVG from "./statics/images/emoji.svg";
import GirlsImage from "./statics/images/image 1.png";
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        { /* */}
        <div style={{ marginBottom: '12px' }}>
          <h2 className="">Create a Free Account Today</h2>
        </div>
        
        { /* */}
        <div className="container">
          <div className="container-left">
            <div className="container-left__inner">
              <h4 style={{ fontSize: "14px", fontWeight: "400", textShadow: "black 2px 1px 0px" }}>Very good works are waiting for you</h4>
              <h1 style={{ fontSize: "30px", textShadow: "black 2px 1px 0px" }}>Register Now</h1>
              <img src={EmojiSVG} alt="smiling emoji" className="smiling-emoji" style={{}} />
              <img src={EmojiSVG} alt="smiling emoji" className="smiling-emoji" style={{ right: "0px", left: "-22px", top: "205px" }} />
              <img src={GirlsImage} alt="" className="" style={{ position: "absolute", right: "-100px", width: "165%", top: "115px"}} />
            </div>
          </div>
          <div className="container-right">
            <div className="container-right__inner">
              <div className="labels">
                <div className="labels-item labels-user">As a User</div>
                <div className="labels-item labels-nutrionist">As a Nutrionist</div>
              </div>

              <div className="form user-form">
                <div className="input-group">
                  <label className="input-group__label" htmlFor="name">Name</label>
                  <input className="input-group__text" type="text" name="name" placeholder="Input Your Name" autoComplete="off" />
                </div>
                <div className="input-group">
                  <label className="input-group__label" htmlFor="name">Email</label>
                  <input className="input-group__text" type="email" name="email" placeholder="Input Your Email" autoComplete="off" />
                </div>
                <div className="input-group">
                  <label className="input-group__label" htmlFor="country">Country</label>
                  <input className="input-group__text" type="text" name="country" placeholder="Select Your Country" autoComplete="off" />
                </div>
                <div className="input-group">
                  <label className="input-group__label" htmlFor="name">Phone Number</label>
                  <input className="input-group__text" type="text" name="phoneNumber" placeholder="Input Your Phone Number" autoComplete="off" />
                </div>
                <div className="input-group">
                  <label className="input-group__label" htmlFor="gender">Gender</label>
                  <input className="input-group__text" type="text" name="gender" placeholder="Select Your Gender" autoComplete="off" />
                </div>
                <button type="button" className="button button--register">Register</button>
                <div className="have-an-account">
                  Already have an account&nbsp;<a href="/" className="">Login</a>
                  <span>&#63;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
