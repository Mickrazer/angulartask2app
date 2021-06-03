import {Component, OnInit} from '@angular/core';
import {CircleDataHandlerService} from '../../service/circle-data-handler.service';
import {CircleInterface} from '../../model/circle.interface';


@Component({
  selector: 'app-circle-bar',
  templateUrl: './circle-bar.component.html',
  styleUrls: ['./circle-bar.component.scss']
})
export class CircleBarComponent implements OnInit {

  public circleData: CircleInterface[] = [];
  public curentElaboration = 0;
  public i = 0;
  public counterOffset = 0;

  constructor(private circleDataHandler: CircleDataHandlerService) {
  }

  ngOnInit(): void {
    this.getCircleData();
    this.paymentCircle(this.circleData[this.i].general, this.circleData[this.i].produced)
    this.counterOffset = 820 - (820 * (this.circleData[this.i].produced * 100) / this.circleData[this.i].general) / 100;
  }

  getCircleData(): CircleInterface[] {
    return this.circleData = this.circleDataHandler.getCircleData();
  }

  paymentCircle(a: number, b: number): number {
    return this.curentElaboration = b - a;
  }
}
