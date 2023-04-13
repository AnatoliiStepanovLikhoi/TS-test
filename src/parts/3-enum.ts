enum Membership {
  Simple,
  Standart,
  Premium,
}

export const membership = Membership.Standart;
export const membershipReverse = Membership[2];

// console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  facebook = "Facebook",
  twitter = "Twitter",
  instagram = "Instagram",
}

const social = SocialMedia.instagram;
console.log(social);
