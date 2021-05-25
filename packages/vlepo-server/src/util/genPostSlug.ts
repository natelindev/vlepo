import cryptoRandomString from 'crypto-random-string';

export const genPostSlug = (title: string) =>
  `${title
    .trim() // trim sides
    .replace(/[^ a-zA-Z0-9_]+/g, '') // remove non-alphanumeric
    .replace(/[\s]+/g, '-') // replace spaces with dash
    .toLocaleLowerCase()}-${cryptoRandomString({
    length: 4,
    type: 'alphanumeric',
  }).toLocaleLowerCase()}`;
