import React, { Component } from 'react';

import './App.css';

//Components
import FoodCard from '../food_card/food_card';


//Services

class App extends Component {



  render() {
    return (
      <div className="App container-fluid">
          <nav className="navbar navbar-text navbar-expand-md navbar-light fixed-top navbar-right">

            <a className="navbar-brand" href="#">Humorous Eats</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav navbar-right">

                <li className="nav-item">
                  <a className="nav-link" >Recipes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Techniques</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Features</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>OUR EDITORS</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>KITCHEN ESSENTIALS</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>PODCASTS</a>
                </li>

              </ul>
            </div>

          </nav>



        <div className='mainContent'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <a href='http://www.seriouseats.com/2017/10/how-to-make-a-pear-galette.html'>
              <img className='card-img-top' src='http://www.seriouseats.com/images/2017/09/20170911-pear-galette-vicky-wasik-7.jpg' alt='chicken'></img>
              <h2 className='cardText'>How To Make A Better Pear Gallete With Better Pear Flavor<br /><br /><h6 className='author'>Stella Park</h6></h2>

              </a>

            </div>
          </div>
          <div className='col-md-6'>
            <div className='card' href='http://www.seriouseats.com/2017/10/the-food-labs-reading-list-joyce-chen-cook-book.html'>
              <a href='http://www.seriouseats.com/2017/10/the-food-labs-reading-list-joyce-chen-cook-book.html'>
              <img className='card-img-top' src='http://www.seriouseats.com/images/2017/10/book-a-day-7-Joyce-Chen-Cook-Book.jpg' alt='chicken'></img>
              <h2 className='cardText'>The Food Lab's Reading List, Day 7: The Joyce Chen Cook Book</h2>
              </a>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <table className='table table-hover'>
                <tr>
                  <td><h2 className='sectionTitle'>Cooking Techniques</h2></td>
                </tr>
            </table>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4'>
            <div className="card">
              <img className="card-img-top" src="http://www.seriouseats.com/assets_c/2017/09/20170729-cookies-and-cream-cookies-vicky-wasik-22-thumb-625xauto-439520.jpg" alt="Card image cap"></img>
                <div className="card-body">
                  <h5>BraveTart: I Heard You Like Cookies, so I Put Oreos in Your Cookies</h5>
                  <p className='author'>Stella Parks</p>
                  <a className='btn-primary btn' href='http://www.seriouseats.com/recipes/2017/09/chicken-pot-pie-biscuit-topping-recipe.html'>View Recipe</a>
                </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className="card">
              <img className="card-img-top" src="http://www.seriouseats.com/images/2017/09/20170908-roasted-vegetables-vicky-wasik-carrots5.jpg" alt="Card image cap"></img>
                <div className="card-body">
                  <h5 >How to Roast Carrots and Parsnips</h5>
                  <p className='author'>J. Kenji Lopex Alt</p>
                  <br />
                  <a className='btn-primary btn' href='http://www.seriouseats.com/recipes/2013/12/roasted-carrots-harissa-creme-fraiche-food-lab-recipe.html'>View Recipe</a>
                </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className="card">
              <img className="card-img-top" src="http://www.seriouseats.com/images/2017/09/20170914-sweetened-condensed-milk-vicky-wasik-8.jpg" alt="Card image cap"></img>
                <div className="card-body">
                  <h5> Homemade Sweetened Condensed Milk: Better Than the Canned Stuff</h5>
                  <p className='author'>Stella Parks</p>
                  <a className='btn-primary btn' href='http://www.seriouseats.com/recipes/2017/10/bravetart-sweetened-condensed-milk-recipe.html'>View Recipe</a>
                </div>
            </div>
        </div>
        </div>

      {/*second row*/}

        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <img className='card-img-top' src='http://www.seriouseats.com/sponsored/images/2017/09/20170912-del-real-carnitas-stuffed-peppers.jpg' alt='roasted peppers'></img>
              <div className='card-body'>
                <h5>For a Heartier Stuffed Pepper, Use Carnitas, Rice, and Beans</h5>
                <p className='author'>sponsored</p>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <img className='card-img-top'src='http://www.seriouseats.com/images/2017/09/20170825-ohitashi-vicky-wasik-9.jpg' alt='rice bowl'></img>
              <div className='card-body'>
                <h5>How to Make Ohitashi: Easy Japanese Marinated Greens</h5>
                <p className='author'>Daniel Gritzer</p>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <img className='card-img-top' src='http://www.seriouseats.com/images/2017/09/20170730-bravetart-apple-pie-vicky-wasik-1.jpg' alt='apple pie'></img>
              <div className='card-body'>
                <h5>BraveTart: How to Make Old-Fashioned Apple Pie, No Gimmicks Required</h5>
                <p className='author'>Stella Parks</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <table className='table moreLink'>

              <tr>
                <td ><h5 className='sectionTitle'>More Techniques</h5></td>
              </tr>

          </table>
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







    );
  }
}

export default App;
