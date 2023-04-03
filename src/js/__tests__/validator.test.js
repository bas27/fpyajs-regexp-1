import Validator from '../validator';

test.each([
  ['Alex12123andr-27gh-ghjk', 'Неудачно: ник содержит более 3 подряд идущих цифр'],
  ['Stepan_5', 'Неудачно: ник не сответствует требованиям'],
  ['B4ro', 'Валидация пройдена успешно'],
  ['333tool-', 'Неудачно: ник не сответствует требованиям'],
  ['sdfhj789080', 'Неудачно: ник не сответствует требованиям'],
  ['варлор90kjhkj', 'Неудачно: ник не сответствует требованиям'],
  ['dod', 'Валидация пройдена успешно'],
])('testing of correct username %s', (userName, returned) => {
  const user = new Validator(userName);
  expect(user.validateUsername()).toBe(returned);
});
