import {REVIEWS} from './reviews';


const AVATAR_URL = `https://api.adorable.io/avatars/74`;


const PHOTOS = [
  `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`,
  `img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room.jpg`
];


const AMENITIES = [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`];


const getRandomInteger = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(min + Math.random() * (max - min + 1));
};

const getRandomUniqueArrayElements = (array) => {
  let result = [];
  const newArrayLength = getRandomInteger(1, array.length);
  while (result.length < newArrayLength) {
    let index = getRandomInteger(0, array.length - 1);
    let randomElement = array[index];
    if (!result.includes(randomElement)) {
      result.push(randomElement);
    }
  }
  return result;
};


export default [

  {
    id: `0`,
    city: `Amsterdam`,
    coordinates: [52.3909553943508, 4.85309666406198],
    pictures: getRandomUniqueArrayElements(PHOTOS),
    title: `The green room, enjoy and relax`,
    description: `The green room, a room to enjoy and relax. The room has a Queen size bed, a kitchenette, a small fridge with soft drinks, still and sparkling water, coffee and tea facilities, a small table inside, a lovely table outside in the garden and is decorated with modern art.Your bathroom is private, as well as your private entrance through the garden.`,
    isPremium: false,
    isFavorite: false,
    type: `Private room`,
    rating: 4.5,
    bedroomsCount: 1,
    maxGuests: 4,
    price: `200`,
    amenities: getRandomUniqueArrayElements(AMENITIES),
    owner: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Rutger`,
      isSuper: false
    },
    reviews: getRandomUniqueArrayElements(REVIEWS)
  },

  {
    id: `1`,
    city: `Amsterdam`,
    coordinates: [52.369553943508, 4.85309666406198],
    pictures: getRandomUniqueArrayElements(PHOTOS),
    title: `Entire serviced apartment hosted by Short Stay Group`,
    description: `The cosy 20sqm one-bedroom apartments are smartly furnished and located on the first and second floor of a rustic red-brick building. The compact design and open-plan living area allows up to two persons to work, live and sleep comfortably.`,
    isPremium: true,
    isFavorite: true,
    type: `Apartment`,
    rating: 4.5,
    bedroomsCount: 1,
    maxGuests: 4,
    price: `800`,
    amenities: getRandomUniqueArrayElements(AMENITIES),
    owner: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Emily`,
      isSuper: false
    },
    reviews: getRandomUniqueArrayElements(REVIEWS)
  },

  {
    id: `2`,
    city: `Amsterdam`,
    coordinates: [52.3909553943508, 4.929309666406198],
    pictures: getRandomUniqueArrayElements(PHOTOS),
    title: `Beautiful house with a pool`,
    description: `Very welcoming and with everything you need to spend a relaxing holiday. Free Wi-Fi internet in the house. It enjoys a splendid view of the Adeje coast. 50 square meters of terrace equipped with table for dining, sofa, armchairs and sun loungers. Heated swimming pool with bar service and small market.`,
    isPremium: true,
    isFavorite: true,
    type: `House`,
    rating: 4.2,
    bedroomsCount: 3,
    maxGuests: 10,
    price: `2000`,
    amenities: getRandomUniqueArrayElements(AMENITIES),
    owner: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Mikki`,
      isSuper: true
    },
    reviews: getRandomUniqueArrayElements(REVIEWS)
  },

  {
    id: `3`,
    city: `Paris`,
    coordinates: [48.856613, 2.352222],
    pictures: getRandomUniqueArrayElements(PHOTOS),
    title: `Cozy hotel downtown`,
    description: `Design-y boutique close to the trendy bars and restos of Shoreditch and Bethnal Green – and an easy 13-min tube ride into Central London. Hit up the all-day cafe for lite bites and salads, smoothies and craft cocktails.`,
    isPremium: false,
    isFavorite: false,
    type: `Hotel`,
    rating: 4.3,
    bedroomsCount: 1,
    maxGuests: 2,
    price: `150`,
    amenities: getRandomUniqueArrayElements(AMENITIES),
    owner: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `David`,
      isSuper: true
    },
    reviews: getRandomUniqueArrayElements(REVIEWS)
  }
]
;
