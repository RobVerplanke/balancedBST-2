/* eslint-disable no-else-return */
import { buildTree } from '../functions/functions.js';

export default class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}
