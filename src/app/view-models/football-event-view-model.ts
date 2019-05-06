import { MarketViewModel } from './market-view-model';
import { IServiceMessage } from './server-interface';

export class FootballEventViewModel {
    id: string = "-";
    homeTeam: string = "-";
    awayTeam: string = "-";
    time: string = "-";
    date: string = "-";
    league: string = "-";

    constructor(msg: IServiceMessage, public markets: Array<MarketViewModel>) {
        if (msg !== null) {
            if (msg.Fixture !== null) {
            if (msg.Fixture.Sport.Name === "Football") {
                    if (msg.Fixture.Id !== null) {
                        this.id = msg.Fixture.Id;
                    }
                    if (msg.Fixture.Competitors !== null) {
                        this.homeTeam = msg.Fixture.Competitors[0].Name;
                        this.awayTeam = msg.Fixture.Competitors[1].Name;
                    }
                    if (msg.Fixture.StartTimeUtc !== null){
                        this.time = msg.Fixture.StartTimeUtc.toString().substring(11,16);
                        this.date = msg.Fixture.StartTimeUtc.toString().substring(0,10);
                    }
                    if (msg.Fixture.Competition !== null) {
                        this.league = msg.Fixture.Competition.Name;
                    }
                }
            }
        }

    }
}