import { OddViewModel } from './odd-view-model';

export class MarketViewModel {
    constructor(public id: number, public name: string, public odds: Array<OddViewModel>){}
}