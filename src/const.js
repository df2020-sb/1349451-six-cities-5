export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_UP: `Price: low to high`,
  PRICE_DOWN: `Price: high to low`,
  RATING: `Top rated first`
};

export const AppRoute = {
  LOGIN: `/login`,
  OFFER: `/offer/:id`,
  FAVORITES: `/favorites`,
  MAIN: `/`,
};

export const APIRoute = {
  OFFERS_ALL: `/hotels`,
  OFFERS_FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,

};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const PictureSize = {
  MAIN: {width: `260`, height: `200`},
  FAVORITES: {width: `150`, height: `110`},
};

export const MARKER = {
  default: `img/pin.svg`,
  active: `img/pin-active.svg`,
  size: [30, 30]
};

export const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`,
  `July`, `August`, `September`, `October`, `November`, `December`
];


export const STARS_COUNT = 5;


export const StarTitle = {
  1: `terrible`,
  2: `bad`,
  3: `not bad`,
  4: `good`,
  5: `perfect`
};
