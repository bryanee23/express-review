import React from 'react';
import RestaurantList from './RestaurantList.jsx';
import AddRestaurantForm from './AddRestaurantForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    }
    this.getRestaurants = this.getRestaurants.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }


  getRestaurants() {
    axios
      .get('/restaurants')
      .then((response) => {
        console.log(response.data)
        this.setState({
          restaurants: response.data,
        })
      })
  }

  /*
  {
    name: name,
    rating: rating
  }
  */
  deleteRestaurant(index) {
    axios
      .delete(`/restaurants/${index}`)
      .then(() => this.getRestaurants())
      .catch(err => console.error(err))
  }

  addRestaurant({ name, rating }) {
    axios.post('/restaurants', {
      name,
      rating
    })
      .then(() => this.getRestaurants())
      .catch(err => console.error(err))
    //add .catch for the TA
  }

  componentDidMount() {
    this.getRestaurants();
  }


  render() {
    return (
      <div className="body">
        <div className="heading">Welp!</div>
        {this.state.restaurants.length ?
          <RestaurantList
          restaurants={this.state.restaurants}
          deleteRestaurant={this.deleteRestaurant} />
          :
          <div className="error">Fix your get request!</div>}
        <AddRestaurantForm addRestaurant={this.addRestaurant} />
      </div>
    )
  }
}

export default App;