export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const adaptOfferToClient = (offer) =>{
  const adaptedOffer = extend(offer,
      {
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        host: extend(offer.host,
            {isSuper: offer.host.is_pro, avatar: offer.host.avatar_url}
        ),
        maxGuests: offer.max_adults
      }
  );

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};


export const adaptOfferToServer = (offer)=> {
  const adaptedOffer = extend(offer,
      {
        "is_favorite": offer.isFavorite,
        "is_premium": offer.isPremium,
        "max_adults": offer.maxGuests,
        "host": extend(offer.host, {"is_pro": offer.host.isSuper, "avatar_url": offer.host.avatar}),
      }
  );

  delete adaptedOffer.isFavorite;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.maxGuests;
  delete adaptedOffer.isFavorite;

  return adaptedOffer;
};

export const adaptCommentToClient = (comment) =>{
  const adaptedComment = extend(comment,
      {
        date: comment.date ? new Date(comment.date) : comment.date,
        user: extend(comment.user,
            {isSuper: comment.user.is_pro, avatar: comment.user.avatar_url}
        ),
      }
  );

  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;

  return adaptedComment;
};

