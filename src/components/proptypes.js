import PropTypes from "prop-types";

export const PROPTYPES = {

  mainScreen: {
    offers: PropTypes.array.isRequired,
  },

  offerCard: {
    pictureClassName: PropTypes.string.isRequired,
    onHover: PropTypes.func,
    offer: PropTypes.shape({
      id: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isBookmarked: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      bedroomsCount: PropTypes.number.isRequired,
      maxGuests: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      owner: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isSuper: PropTypes.bool.isRequired
      }).isRequired,
      reviews: PropTypes.array.isRequired
    })
  },

  offersList: {
    offers: PropTypes.array.isRequired,
  },

  review: {
    review: PropTypes.shape({
      offerId: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired
  },

  reviewsList: {
    reviews: PropTypes.array.isRequired,
  },

  citiesList: {
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCity: PropTypes.string.isRequired,
    onCityClick: PropTypes.func.isRequired
  },
};
