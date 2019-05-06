import { Injectable } from '@angular/core';
import { FootballEventViewModel } from '../view-models/football-event-view-model';
import { MarketViewModel } from '../view-models/market-view-model';
import { OddViewModel } from '../view-models/odd-view-model';
import { FeedService } from './feed-service';
import { IServiceMessage } from '../view-models/server-interface';
import { Subject } from 'rxjs';
import { findIndex } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    footballEvents = new Array<FootballEventViewModel>();
    constructor(private feedService: FeedService) {
        this.feedService.onMessageArrived.asObservable().subscribe(message => {
            this.createFootballEvent(message);
        })
        this.feedService.connect();
    }
    createFootballEvent(msg: IServiceMessage) {
        let eventModel = new FootballEventViewModel(msg, new Array<MarketViewModel>())
        let marketModel: MarketViewModel;
        if (msg.MarketSet !== null) {
            for (let i = 0; i < msg.MarketSet.Markets.length; i++) {
                let oddArray: Array<OddViewModel> = new Array<OddViewModel>();
                for (let j = 0; j < msg.MarketSet.Markets[i].Selections.length; j++) {
                    let oddModel = new OddViewModel(msg.MarketSet.Markets[i].Selections[j].Id, msg.MarketSet.Markets[i].Selections[j].ShortName, msg.MarketSet.Markets[i].Selections[j].Decimal, msg.MarketSet.Markets[i].Selections[j].Decimal);
                    oddArray.push(oddModel);

                }
                marketModel = new MarketViewModel(msg.MarketSet.Markets[i].Id, msg.MarketSet.Markets[i].Name, oddArray);
                oddArray = [];
                eventModel.markets.push(marketModel);
            }
            this.updateFootballEvents(eventModel);
        }
    }
    updateFootballEvents(newFootballEvent: FootballEventViewModel) {
        let index = this.footballEvents.findIndex(footballEvent => footballEvent.id === newFootballEvent.id);
        let footballEvent = this.footballEvents[index];
        if (index < 0) {
            this.footballEvents.push(newFootballEvent);
        }
        else {
            this.updateFootballEvent(footballEvent, newFootballEvent);
        }
    }
    updateFootballEvent(footballEvent: FootballEventViewModel, newFootballEvent: FootballEventViewModel) {
        footballEvent.id = newFootballEvent.id;
        footballEvent.homeTeam = newFootballEvent.homeTeam;
        footballEvent.awayTeam = newFootballEvent.awayTeam;
        footballEvent.league = newFootballEvent.league;
        footballEvent.date = newFootballEvent.date;
        footballEvent.time = newFootballEvent.time;
        newFootballEvent.markets.forEach((new_market) => {
            let i = footballEvent.markets.findIndex(market => market.id === new_market.id);
            if(i >= 0){
                footballEvent.markets[i].name = new_market.name;
                new_market.odds.forEach((new_odd) => {
                    let j = footballEvent.markets[i].odds.findIndex(odd => odd.id === new_odd.id);
                    if(j >= 0){
                        footballEvent.markets[i].odds[j].name = new_odd.name;
                        footballEvent.markets[i].odds[j].previousValue = footballEvent.markets[i].odds[j].value;
                        footballEvent.markets[i].odds[j].value = new_odd.value;
                    }
            })
        }
        })
    }
}