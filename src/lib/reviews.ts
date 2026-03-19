export type ReviewSource = "facebook" | "google";

export type Review = {
  id: string;
  name: string;
  /** ISO date (YYYY-MM-DD) for sorting */
  date: string;
  /** Display label */
  dateLabel: string;
  text: string;
  source: ReviewSource;
  rating?: 5;
  verified?: boolean;
};

/**
 * Client reviews from Facebook recommendations and Google (incl. verified).
 * Sorted newest-first when rendered.
 */
export const reviews: Review[] = [
  {
    id: "marina-l",
    name: "Marina L.",
    date: "2026-03-17",
    dateLabel: "Mar 17, 2026",
    source: "google",
    rating: 5,
    verified: true,
    text: "Working with Nicole and her team was a pleasure. They were punctual and professional. She gave good advice on water filtration recommendations and did a great job on the entire house. Looking to consider monthly cleaning services. Would definitely recommend Nicole and Done Right Cleaning.",
  },
  {
    id: "suzanne-g",
    name: "Suzanne G.",
    date: "2026-02-11",
    dateLabel: "Feb 11, 2026",
    source: "google",
    rating: 5,
    verified: true,
    text: "Done Right Cleaning arrived on time and did an excellent job. 2 very kind and professional people cleaned our house thoroughly. We have signed up to have them clean every 2 weeks. We would give them our highest recommendation.",
  },
  {
    id: "kendal-salazar",
    name: "Kendal Salazar",
    date: "2024-09-23",
    dateLabel: "Sep 23, 2024",
    source: "facebook",
    text: "Nicole did a fantastic job on our house! She took her time and made our floors and bathroom look the best they've looked in years. Plus the house smelled so fresh for days after! She really is great at what she does. Highly recommend! :)",
  },
  {
    id: "jen-sanchez",
    name: "Jen Sanchez",
    date: "2024-08-26",
    dateLabel: "Aug 26, 2024",
    source: "facebook",
    text: 'Hire this company today! Nicole was very thorough, super kind and did a beautiful job getting my home back in order. If you need someone to take the heavy lifting off your plate, book an appointment today. Her work is literally "Done Right"!',
  },
  {
    id: "cameron-knight",
    name: "Cameron Knight",
    date: "2024-08-23",
    dateLabel: "Aug 23, 2024",
    source: "facebook",
    text: "Outstanding work!! House looks and smells great. They tackled all of the dog hair, which is quite impressive. Highly recommended.",
  },
  {
    id: "araceli-adams",
    name: "Araceli Adams",
    date: "2023-08-18",
    dateLabel: "Aug 18, 2023",
    source: "facebook",
    text: "My house looked so good and was so shiny. It smells absolutely amazing. No other cleaner was ever able to get out my water spots on my shower but Done Right did. Highly recommended.",
  },
  {
    id: "mimi-s",
    name: "Mimi S.",
    date: "2024-06-10",
    dateLabel: "Jun 10, 2024",
    source: "google",
    rating: 5,
    text: "Nicole is a gem and we are so happy we found her! She is trustworthy; she has her own key to come and go as needed. She goes above and beyond the job of housekeeping to make our place beautiful and comfortable. Nicole is a terrific communicator and a very positive influence on the family. We loved her practical ideas to keep us organized and sane during our remodeling phase. She's been wonderful about caring for our pets when we're not at home and she has become truly invaluable to us.",
  },
  {
    id: "amanda-q",
    name: "Amanda Q.",
    date: "2024-06-10",
    dateLabel: "Jun 10, 2024",
    source: "google",
    rating: 5,
    text: "Nicole is a hard worker and has a lot of attention to detail. Great job with stainless steel, glass and mirrors!",
  },
  {
    id: "lynette-g",
    name: "Lynette G.",
    date: "2024-06-10",
    dateLabel: "Jun 10, 2024",
    source: "google",
    rating: 5,
    text: "She's always on time. Cleans thoroughly and for the price she quoted you.",
  },
  {
    id: "chelsea-j",
    name: "Chelsea J.",
    date: "2024-06-09",
    dateLabel: "Jun 9, 2024",
    source: "google",
    rating: 5,
    text: "Nicole and her team can really tackle a dirty house. She works for my real estate company and is extremely skilled on detailed work. Her professionalism outshines any other company that I worked with.",
  },
  {
    id: "dawnell-barboza",
    name: "Dawnell Barboza",
    date: "2024-02-04",
    dateLabel: "Feb 4, 2024",
    source: "facebook",
    text: "She worked around my schedule, good prices, amazing job cleaning.",
  },
  {
    id: "taura-scott",
    name: "Taura Scott",
    date: "2024-02-02",
    dateLabel: "Feb 2, 2024",
    source: "facebook",
    text: "This cleaning service does such a great job. Reasonable prices and professional. Very customer oriented.",
  },
  {
    id: "kev-hilman",
    name: "Kev Hilman",
    date: "2024-01-31",
    dateLabel: "Jan 31, 2024",
    source: "facebook",
    text: "Done Right has been cleaning my home for over a year now. They do a wonderful job. Always on time, professional and thorough. Great communicator, and all around good people. Very trustworthy, and hard working. I would recommend them to friends and family.",
  },
  {
    id: "yemaya-searcy",
    name: "Yemaya Searcy",
    date: "2024-01-30",
    dateLabel: "Jan 30, 2024",
    source: "facebook",
    text: "Great service! On time, efficient and cleaned beyond my expectations. Thank you! Will use on more of my property clean ups!",
  },
  {
    id: "austin-roe",
    name: "Austin Roe",
    date: "2024-01-30",
    dateLabel: "Jan 30, 2024",
    source: "facebook",
    text: "Loved the service! Very fast and great attention to detail. Would highly recommend.",
  },
  {
    id: "janelle-saitone",
    name: "Janelle Saitone-McGuire",
    date: "2024-01-30",
    dateLabel: "Jan 30, 2024",
    source: "facebook",
    text: "Thank you so much to Done Right cleaning! I requested my bathrooms and kitchen to be deep cleaned and we were not disappointed. It's amazing to come home to a beautiful accomplished chore that you often dread doing yourself with such little spare time. Happy customers right here!",
  },
  {
    id: "ryan-swann",
    name: "Ryan Swann",
    date: "2024-01-30",
    dateLabel: "Jan 30, 2024",
    source: "facebook",
    text: "Does a very good job and very friendly.",
  },
];

export function getReviewsSorted(): Review[] {
  return [...reviews].sort((a, b) => b.date.localeCompare(a.date));
}
