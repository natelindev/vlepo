import cryptoRandomString from 'crypto-random-string';

export const genPostSlug = (title: string) =>
  `${title
    .trim() // trim sides
    .replace(/[^ -~]+/g, '') // remove non-ascii
    .replace(/[\s]+/g, '-') // replace spaces with dash
    .toLocaleLowerCase()}-${cryptoRandomString({
    length: 4,
    type: 'alphanumeric',
  }).toLocaleLowerCase()}`;
