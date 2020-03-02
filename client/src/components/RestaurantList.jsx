import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';
const RestaurantList = ({ restaurants }) => (
  <div className="list">
    {restaurants.map((restaurant, i) => (
      <RestaurantListEntry
        restaurant={restaurant}
        key={i}
        index={i}
      />
    ))}
  </div>
)

export default RestaurantList;