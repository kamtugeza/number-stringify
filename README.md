# Number Stringify

Number Stringify is a small library that took an integer and converts it into words.

Let's see examples of the task:
- 0 → zero
- 9 → nine
- 13 → thirteen
- 32 → thirty-two
- 120 → one hundred and twenty
- 3023 → three thousand twenty-three
- 9904 → ninety-nine hundred and four
- 1403068 → one million four hundred and three thousand sixty-eight

## Instalation

All you need to start work with the library is just install npm dependency to your project.

```bash
npm i number-stringify
```

## Examples

Before you start using the library you have to initialize a stringifier with all exceptions you want.

```js
import { IntStr, IntThousandExp } from 'number-stringify';

const str = new IntStr();
const strWithExp = new IntThousandExp(intStr);

str.stringify(2345) // two thousand three hundred and forty-five
strWithExp.stringify(2345) // twenty-three hundred and forty-five
```

## License

Number Stringify is [MIT licensed](./LICENSE).