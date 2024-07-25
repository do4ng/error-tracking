import { emit } from './parse';

try {
  const name: string = '🐒';

  throw new Error(`Hello ${name}`);
} catch (e) {
  emit(e, './dist/index.js.map');
}
