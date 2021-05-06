import { Stringifier } from '../stringifier';
import { IntParser, IntParserBase } from './int-parser';
import { IntMapper, IntMapperBase } from './int-mapper';

export class IntStr implements Stringifier {

  constructor(
    private mapper: IntMapperBase = new IntMapper(),
    private parser: IntParserBase = new IntParser(),
  ) { }

  stringify(value: number) {
    return this.parser.parse(value)
        .map(this.mapper.mapThousandth)
        .filter(digits => digits.length > 0)
        .reverse()
        .join(' ');
  }
}
