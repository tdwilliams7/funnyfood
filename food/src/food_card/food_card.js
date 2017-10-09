import React, {Component} from 'react';
import './food_card.css';

class FoodCard extends Component {
  render(){
    return(

      <div className='col-sm-4'>
        <div className="card">
          <img className="card-img-top" src="http://www.seriouseats.com/recipes/assets_c/2017/09/20170902-chicken-pot-pie-vicky-wasik40-thumb-1500xauto-439266.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <p className="card-text">{title[0]}</p>
              <a className='btn-primary btn' href='http://www.seriouseats.com/recipes/2017/09/chicken-pot-pie-biscuit-topping-recipe.html'>View Recipe</a>
            </div>
        </div>
      </div>
      );
  }
}

let title = ['food', 'I want', 'to eat', 'now']

export default FoodCard;