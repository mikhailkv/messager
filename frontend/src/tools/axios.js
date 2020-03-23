import axios from 'axios';
import { csrf } from './utils.js';

const instance = axios.create({
  headers: {
    'X-CSRFToken': csrf,
  },
});

export default instance;