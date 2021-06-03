import { IndicatorsInterface } from '../model/indicators.interface';
import { detailedData } from './detailedData'

export const indicatorsData: IndicatorsInterface[] = [
  {
    name: 'Сырье',
    deviations: 2,
    detailed: [
      detailedData[0],
      detailedData[1],
      detailedData[2],
      detailedData[3]
    ],
    isOpen: false
  },
  {
    name: 'Топливо газообразное',
    deviations: 1,
    detailed: [
      detailedData[2],
      detailedData[3]
    ],
    isOpen: false
  },
  {
    name: 'Жидкое топливо',
    deviations: 2,
    detailed: [
      detailedData[0],
      detailedData[1],
      detailedData[2],
      detailedData[3]
    ],
    isOpen: false
  },
  {
    name: 'Дымовые газы',
    deviations: 0,
    detailed: [
    detailedData[0]
    ],
    isOpen: false
  },
  {
    name: 'Воздух',
    deviations: 2,
    detailed: [
      detailedData[0],
      detailedData[1],
      detailedData[2],
      detailedData[3]
    ],
    isOpen: false
  }

]
