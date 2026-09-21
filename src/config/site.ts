export const site = {
  name: "Pipo Fremantle",
  shortName: "Pipo",
  tagline: "Authentic Nepalese kitchen in Fremantle Food Court",
  description:
    "Pipo Fremantle brings Himalayan spices, handmade momos and family recipes from Nepal to Fremantle Food Court. Dine in, takeaway or order online.",
  url: "https://pipofremantle.com.au",
  menuUrl: "https://pipofremantle.lifeintouch.net/",
  email: "hello@pipofremantle.com.au",
  phone: "",
  location: {
    venue: "Fremantle Food Court",
    street: "6 Henderson Street",
    suburb: "Fremantle",
    state: "WA",
    postcode: "6160",
    country: "Australia",
    mapsQuery: "Fremantle Food Court, 6 Henderson Street, Fremantle WA 6160",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fremantle+Food+Court+6+Henderson+Street+Fremantle+WA+6160",
    embedUrl:
      "https://maps.google.com/maps?q=Fremantle%20Food%20Court%206%20Henderson%20Street%20Fremantle%20WA%206160&z=16&output=embed",
  },
  hours: [
    { days: "Monday – Tuesday", time: "Closed" },
    { days: "Wednesday – Sunday", time: "11:00am – 9:00pm" },
  ],
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home", external: false },
  { href: "/about", label: "About Us", external: false },
  { href: site.menuUrl, label: "Menu", external: true },
  { href: "/contact", label: "Contact", external: false },
] as const;

export const signatureDishes = [
  {
    name: "Steam Momo",
    description:
      "Handmade Nepalese dumplings, steamed until tender and served with our tangy tomato-sesame achar.",
    image: "/images/momos.jpg",
    badge: "Nepal favourite",
  },
  {
    name: "Himalayan Curry",
    description:
      "Slow-cooked curry with warm Himalayan spices — rich, fragrant and cooked to order.",
    image: "/images/curry.jpg",
    badge: "From Nepal",
  },
  {
    name: "Chowmein",
    description:
      "Wok-tossed noodles the Kathmandu street-food way, with fresh vegetables and Nepalese masala.",
    image: "/images/noodles.jpg",
    badge: "Street classic",
  },
  {
    name: "Samosa",
    description:
      "Crisp pastry, spiced potato filling and green chutney — a Freo snack with a Nepal kitchen soul.",
    image: "/images/bread.jpg",
    badge: "Street snack",
  },
] as const;

export function fullAddress() {
  const { venue, street, suburb, state, postcode } = site.location;
  return `${venue}, ${street}, ${suburb} ${state} ${postcode}`;
}
