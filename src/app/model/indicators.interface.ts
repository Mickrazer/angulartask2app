import { DetailedInterface } from './detailed.interface'

export interface IndicatorsInterface {

  name: string;
  deviations: number;
  detailed: DetailedInterface[];
  isOpen: boolean;
}
