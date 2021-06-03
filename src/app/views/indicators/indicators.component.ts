import {Component, OnInit} from '@angular/core';
import {IndicatorsDataHandlerService} from '../../service/indicators-data-handler.service';
import {IndicatorsInterface} from '../../model/indicators.interface';
import {DetailedInterface} from '../../model/detailed.interface';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {

  public indicatorsData: IndicatorsInterface[] = [];

  constructor(private indicatorsDataHandler: IndicatorsDataHandlerService) {
  }

  ngOnInit(): void {
    this.getIndicatorsData();
  }

  getIndicatorsData(): any {
    return this.indicatorsData = this.indicatorsDataHandler.getIndicatorsData();
  }

  toogleOpenStatus(indicator: IndicatorsInterface): void {
    indicator.isOpen = !indicator.isOpen;
  }

  toogleSelectedDetatailed(detailed: DetailedInterface): void {
    detailed.seleceted = !detailed.seleceted;
  }

}
