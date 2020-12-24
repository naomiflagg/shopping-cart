import uniqid from 'uniqid';
import chick from './images/chick.jpg';
import cub from './images/cub.jpg';
import kitten from './images/kitten.jpg';
import lamb from './images/lamb.jpg';
import monkey from './images/monkey.jpg';
import panda from './images/panda.jpg';
import piglet from './images/piglet.jpg';
import puppy from './images/puppy.jpg';

const items = [
  { src: chick, price: 'Affection' },
  { src: cub, price: 'Playtime' },
  { src: kitten, price: 'Snuggles' },
  { src: lamb, price: 'Tenderness' },
  { src: monkey, price: 'Entertainment' },
  { src: panda, price: 'Kisses' },
  { src: piglet, price: 'Feasts' },
  { src: puppy, price: 'Cuddles' }
];

// Add an id to each item
for (const item of items) {
  item.id = uniqid();
}

export default items;
