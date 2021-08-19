import * as assert from 'assert';
import { parseString } from '../dist/main.js';

it('Parse', () => {
  assert.deepStrictEqual(
    parseString(
      '[button]<<Click>> me to [bold]<<Sign in>> [red]<<>> []<<aaa>> <<bbb>>[haha] [tag1] <<ccc>> [tag2]<<<aaa>>',
    ),
    [
      {
        type: 'button',
        value: 'Click',
      },
      {
        type: '',
        value: ' me to ',
      },
      {
        type: 'bold',
        value: 'Sign in',
      },
      {
        type: '',
        value: ' ',
      },
      {
        type: 'red',
        value: '',
      },
      {
        type: '',
        value: ' []<<aaa>> <<bbb>>[haha] [tag1] <<ccc>> ',
      },
      {
        type: 'tag2',
        value: '<aaa',
      },
    ],
  );
});
