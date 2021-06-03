import {Injectable} from '@angular/core';
import {circleData} from '../data/circleData'
import {CircleInterface} from '../model/circle.interface'


@Injectable({
  providedIn: 'root'
})
export class CircleDataHandlerService {

  constructor() {
  }

  getCircleData(): CircleInterface[] {
    return circleData;
  }
}
