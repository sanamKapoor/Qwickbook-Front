import React from 'react';

class LoginForms extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userName: '',
       userEmail: '',
       userPass: '',
       userLogin: false
    }
  }

  handleChange = (e) => {
    const { name, value} = e.target;
     this.setState({
       [name]: value
     })
  }

  handleNewAccount = (e) =>{
    e.preventDefault();
    if(!this.state.userName || !this.state.userEmail || !this.state.userPass){
      alert('Enter detailes!!')
    }
    else {
    this.setState({
      userLogin: true,
      userName: '',
       userEmail: '',
       userPass: ''
    })
    console.log(`Welcome ${this.state.userName}`);
    
  }
  }

  handleUserAccount = (e) => {
    e.preventDefault();
    if( !this.state.userEmail || !this.state.userPass){
      alert('Enter detailes!!')
    }
    else {
    this.setState({
      userLogin: true,
      userName: '',
       userEmail: '',
       userPass: '',
    })
    console.log(`Hello ${this.state.userName}`);
    
  }
  }
  

  render() {
  return (
    <React.Fragment>
    <div className="modal fade bd-example-modal-xl" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
              <div className="container modal-content" id="container">
                  <div className="form-container sign-up-container">
                    <form  id="signUpForm" onSubmit={this.handleNewAccount}>
                      <h1>Create Account</h1>
                      
                      <input onChange={this.handleChange} name="userName" value={this.state.userName} type="text" placeholder="Name" />
                      <input onChange={this.handleChange} name="userEmail" value={this.state.userEmail} type="email" placeholder="Email" />
                      <input onChange={this.handleChange} name="userPass" value={this.state.userPass} type="password" placeholder="Password" />

                      <button className="mt-3">Sign Up</button>
                    </form>
                  </div>
                  <div className="form-container sign-in-container">
                    <form  id="signInForm" onSubmit={this.handleUserAccount}>
                      <h1>Sign in</h1>
                      
                      <input onChange={this.handleChange} name="userEmail" value={this.state.userEmail} type="email" placeholder="Email" />
                      <input onChange={this.handleChange} name="userPass" value={this.state.userPass} type="password" placeholder="Password" />

                      {/* <a href="#">Forgot your password?</a> */}
                      <button>Sign In</button>
                    </form>
                  </div>
                  
                  <div className="overlay-container">
                    <div className="overlay">
                      <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p className="lead">To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" 
                        onClick={ () => {
        const container = document.getElementById('container');        
        container.classList.remove("right-panel-active");
    }}
    >Sign In</button>
                      </div>
                      <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p className="lead">Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" 
                        onClick={() => {
    const container = document.getElementById('container');      
      container.classList.add("right-panel-active");
    }}>Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
      </div>
      </React.Fragment>
  )
  }
}

export default LoginForms;