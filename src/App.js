import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.myList = this.myList.bind(this)
    this.clear = this.myList.bind(this)

    this.inputName = React.createRef();

    this.state = {
      fName: ''
      
    }
  }

   
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.inputName.current.value})
  };

  myList() {
    var x = document.getElementById("guest-info");
      x.style.display = "block";
    
  }
  clear() {
    var y = document.getElementById("firstN");
      y.this.style.display = " ";
  }
  render() {
    return (
    <div className="App">
    
      <div className="container">
                      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">Guest Book</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                      <a class="nav-item nav-link" href="#">Features</a>
                      <a class="nav-item nav-link" href="#">About Us</a>
                      <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact JUs</a>
                    </div>
                  </div>
                </nav>
               <div className="aside">
               <div id="list-example" class="list-group">
                <a class="list-group-item list-group-item-action" href="myFunction()"><button onClick={this.myList}>Guest  List </button> </a>
                <a class="list-group-item list-group-item-action" href="#list-item-2"><button onClick={this.myList}>Guest  Form  </button></a>
                <a class="list-group-item list-group-item-action" href="#list-item-3"><button onClick={this.myList}>Remove Guest</button></a>
              </div>
              
               </div>
               <div className="main" >
                  <div className="guest-info" id="guest-info">
                  
                          <form  onSubmit={this.handleSubmit}>
                            <div class="form-row">
                              <div class="col">
                                <input type="text" ref={this.inputName} class="form-control" id="firstN" placeholder="First name"/>
                              </div></div>
                              <div class="form-row">
                              <div class="col">
                                <input type="text" class="form-control" id="lastN" placeholder="Last name"/>
                              </div></div>
                              <div class="form-row">
                              <div class="col">
                            
                              <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                              </div>
                              </div>
                              <div class="form-row">
                              <div class="col">
                            
                              <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                              </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            <button type="submit" onClick={this.clear} class="btn btn-primary">clear</button>
                          </form>
                  </div>

                              <div className="displayValues">
                              <form>
                            <div class="form-row">
                              <div class="col">
                              <h3>Value: {this.state.value}</h3>
                              </div></div>
                              <div class="form-row">
                              <div class="col">
                              <h3>LastName: {this.state.value}</h3>
                              </div></div>
                              <div class="form-row">
                              <div class="col">
                            
                              <h3>Email: {this.state.value}</h3>
                              </div>
                              </div>
                              <div class="form-row">
                              <div class="col">
                            
                              <h3>Password: {this.state.value}</h3>
                              </div>
                            </div>
                          </form>


                              </div>
               </div>
      </div>
    </div>
  );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
