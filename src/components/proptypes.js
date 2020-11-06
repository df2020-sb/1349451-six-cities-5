import PropTypes from "prop-types";

export const PROPTYPES = {

  offerCard: {
    pictureClassName: PropTypes.string.isRequired,
    onHover: PropTypes.func,
    offer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      bedrooms: PropTypes.number.isRequired,
      maxGuests: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      host: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isSuper: PropTypes.bool.isRequired
      }).isRequired,
    })
  },

  offersList: {
    offers: PropTypes.array.isRequired,
  },

  review: {
    review: PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isSuper: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,

      rating: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired
  },

  reviewForm: {
    reviewForm: PropTypes.shape({
      score: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      isValid: PropTypes.bool.isRequired,
      onSubmit: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired
    })
  },

  reviewsList: {
    reviews: PropTypes.array.isRequired,
  },

  citiesList: {
    selectedCity: PropTypes.string.isRequired,
    onCityClick: PropTypes.func.isRequired
  },

  sort: {
    currentSortType: PropTypes.string.isRequired,
    handleSortTypeChange: PropTypes.func.isRequired
  },


  property: {
    selectedOffer: PropTypes.object.isRequired,
    nearbyOffers: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    handleFavoriteClick: PropTypes.func.isRequired,
    renderMap: PropTypes.func.isRequired,
    onCardHover: PropTypes.func.isRequired,
    onCardMouseOut: PropTypes.func.isRequired,
    activeOfferId: PropTypes.number.isRequired
  }
};
