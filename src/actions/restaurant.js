
export const fetchRestaurants=(restaurant,loader) =>({
    type: 'FETCH_RESTAURANTS',
    restaurant,
    loader
})

export const thunkRestaurants =(city='', start=1) =>{
    return (dispatch, getState) =>{
        fetch("https://opentable.herokuapp.com/api/restaurants?city="+city)
        .then(res => res.json())
        .then(
          (result) => {
              console.log("resultAction "+result.restaurants);
              dispatch(fetchRestaurants(result.restaurants,false));
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              
            this.setState({
              
            });
          }
        )        
        // console.log("City "+city);
    }
}