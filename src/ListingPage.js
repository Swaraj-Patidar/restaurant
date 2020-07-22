import React, { Component } from 'react';
import {connect} from 'react-redux';
import spinner from './images/loader.gif';
import './styles/Loader.css';
import './styles/Summary.css';
class ListingPage extends Component {

  constructor(props){
    super(props);
    this.state={
      start : 1,
      restaurants:[]
    }
  }



componentDidMount() {

}




  render() {
    
      console.log("renderCity "+this.props.city);
      console.log("renderLength "+this.props.restaurants.length);
      // console.log("renderLoader "+this.props.loader);
    
    return (
      <div>
        {this.props.loader? 
         <div className='loader'>
         <img src={spinner} alt='loading..'/>
         </div> :
         <div>
           <h3>Restaurants in {this.props.city}</h3>
           <hr />
        <ul>
          {this.props.restaurants.map((restaurant,i) => (
            <li key={i}>
              {restaurant.name} --- {restaurant.address} --- {restaurant.price}
            </li>
          ))}
        </ul> 
        </div>
       }
      </div>
    )
  }
};

const mapStateToProps =({restaurants, city, error,loader}, props)=>({
    restaurants,
    city,
    loader
})

export default connect(mapStateToProps)(ListingPage);