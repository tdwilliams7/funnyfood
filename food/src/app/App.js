import React, { Component } from 'react';

import './App.css';

//Components
import FoodCard from '../food_card/food_card';


//Services

class App extends Component {



  render() {
    return (
      <div className="App container-fluid">
          <nav className="navbar navbar-fixed-top navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#">Food</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href='#chicken'>Chicken<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#beef'>Beef</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Fish</a>
                </li>
              </ul>
            </div>
          </nav>


        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <img className='card-img-top' src='http://www.seriouseats.com/recipes/assets_c/2017/09/20170902-chicken-pot-pie-vicky-wasik40-thumb-1500xauto-439266.jpg' alt='chicken'></img>
              <div className='card-body'>
                <p className='card-text'>here is some fake text; I like food a lot</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card'>
              <img className='card-img-top' src='http://www.seriouseats.com/recipes/assets_c/2017/09/20170902-chicken-pot-pie-vicky-wasik40-thumb-1500xauto-439266.jpg' alt='chicken'></img>
              <div className='card-body'>
                <p className='card-text'>here is some fake text; I like food a lot</p>
              </div>
            </div>
          </div>
        </div>

        <div className='chicken'>
        <div className='row'>
        <div className='col-xs-12'>
          <a name='chicken'></a>
          <h2>Chicken</h2>
          <hr></hr>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div className="card">
              <img className="card-img-top" src="http://www.seriouseats.com/recipes/assets_c/2017/09/20170902-chicken-pot-pie-vicky-wasik40-thumb-1500xauto-439266.jpg" alt="Card image cap"></img>
                <div className="card-body">
                  <p className="card-text">Some quick example textfdslfbusbfusbd;kfh;df di fs iofhsd o;fhsd ifhds fuh ihfp oihiofh[ofiheqfo[qoih[ ih[hto build on the card title and make up the bulk of the card's content.</p>
                  <a className='btn-primary btn' href='http://www.seriouseats.com/recipes/2017/09/chicken-pot-pie-biscuit-topping-recipe.html'>View Recipe</a>
                </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className="card">
              <img className="card-img-top" src="http://www.seriouseats.com/recipes/assets_c/2017/09/20170902-chicken-pot-pie-vicky-wasik40-thumb-1500xauto-439266.jpg" alt="Card image cap"></img>
                <div className="card-body">
                  <p className="card-text">Some quick example textfdslfbusbfusbd;kfh;df di fs iofhsd o;fhsd ifhds fuh ihfp oihiofh[ofiheqfo[qoih[ ih[hto build on the card title and make up the bulk of the card's content.</p>
                  <a className='btn-primary btn' href='http://www.seriouseats.com/recipes/2017/09/chicken-pot-pie-biscuit-topping-recipe.html'>View Recipe</a>
                </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className="card">
              <img className="card-img-top" src="http://www.seriouseats.com/recipes/assets_c/2017/09/20170902-chicken-pot-pie-vicky-wasik40-thumb-1500xauto-439266.jpg" alt="Card image cap"></img>
                <div className="card-body">
                  <p className="card-text">Some quick example textfdslfbusbfusbd;kfh;df di fs iofhsd o;fhsd ifhds fuh ihfp oihiofh[ofiheqfo[qoih[ ih[hto build on the card title and make up the bulk of the card's content.</p>
                  <a className='btn-primary btn' href='http://www.seriouseats.com/recipes/2017/09/chicken-pot-pie-biscuit-topping-recipe.html'>View Recipe</a>
                </div>
            </div>
          </div>
        </div>

        <a name='beef'></a>
        <div className='appMain row'>
          <FoodCard />
          <FoodCard />
          <FoodCard />

      </div>


        </div>
      </div>



      <footer>
        <ul>
          <li>nfdiub</li>
          <li>nfdiub</li>
        </ul>
      </footer>
    </div>





    );
  }
}

export default App;
