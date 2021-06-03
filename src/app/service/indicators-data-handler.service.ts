import {Injectable} from '@angular/core';
import {indicatorsData} from '../data/indicatorsData';
import {IndicatorsInterface} from '../model/indicators.interface';
import {DetailedInterface} from '../model/detailed.interface';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsDataHandlerService {

  constructor() {
  }

  getIndicatorsData(): IndicatorsInterface[] {
    return indicatorsData;
  }

}
