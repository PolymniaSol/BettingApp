export interface IServiceMessage {
    Header: IHeader,
    Fixture: IFixture,
    FixtureId: string,
    MarketSet: IMarketSet,
    FootballMatchSummary?: IFootballMatchSummary
    BasketballMatchSummary?: IBasketballMatchSummary
}
export interface IHeader {
    MessageGuid: string,
    TimeStampUtc: Date,
    IsHeartbeat: boolean,
    IsCompact: boolean
}
export interface IFixture {
    Id: string,
    Name: string,
    FixtureType: string,
    Status: string,
    StartTimeUtc: Date,
    Sport: ISport,
    Competition: ICompetition,
    Season: ISeason,
    Round: IRound,
    Competitors: ICompetitor[]
}
export interface IMarketSet {
    FixtureId: string,
    Markets: IMarket[]
}
export interface IFootballMatchSummary {
    FixtureId: string,
    CurrentPhase: string,
    Clock: IClock,
    CurrentDangerState: string,
    CurrentBookingState: string,
    CurrentVarState: string,
    StartTimes: IStartTimes,
    StoppageTimes: IStoppageTimes,
    Goals: IActionSummary,
    YellowCards: IActionSummary,
    SecondYellowCards: IActionSummary,
    StraightRedCards: IActionSummary,
    Substitutions: IActionSummary,
    ShotsOnTarget: IActionSummary,
    ShotsOffTarget: IActionSummary,
    ShotsOffWoodwork: IActionSummary,
    BlockedShots: IActionSummary,
    Corners: IActionSummary,
    PenaltiesAwarded: IActionSummary,
    Fouls: IActionSummary,
    Offsides: IActionSummary,
    GoalKicks: IActionSummary,
    MissedPenalties: IActionSummary,
    SavedPenalties: IActionSummary,
    ThrowIns: IActionSummary,
    KickOffs: IActionSummary,
    IsSecondLeg?: boolean,
    FirstLegScore: IScore,
    NormalTimeHalfDuration: string,
    ExtraTimeHalfDuration: string,
    CanGoToExtraTime?: boolean,
    CanGoStraightToPenaltiesAfterNormalTime?: boolean,
    CanGoToPenalties?: boolean,
    MessageTimestampUtc?: Date,
    BetAcceptOk?: boolean,
    CurrentMinute?: number
}
export interface ISport {
    Id?: number,
    Name: string
}
export interface ICompetition {
    Id?: number,
    Name: string,
    Region: IRegion
}
export interface ISeason {
    Id?: number,
    Name: string
}
export interface IRound {
    Id?: number,
    Name: string
}
export interface ICompetitor {
    Id?: number,
    Name: string,
    HomeAway: string,
    Gender: string,
    CompetitorType: string
}
export interface IMarket {
    Id?: number,
    Sequence?: number,
    TradingStatus: string,
    Name: string,
    ExpiryUtc?: Date,
    Handicap: number,
    MarketType: IMarketType,
    InPlay: boolean,
    Selections: ISelection[]
}
export interface IClock {
    TimeElapsedInPhase: string,
    TimestampUtc: Date,
    IsClockRunning: boolean
}
export interface IStartTimes {
    FirstHalf?: Date,
    SecondHalf?: Date,
    ExtraTimeFirstHalf?: Date,
    ExtraTimeSecondHalf?: Date,
    Penalties?: Date
}
export interface IStoppageTimes {
    FirstHalf?: Date,
    SecondHalf?: Date,
    ExtraTimeFirstHalf?: Date,
    ExtraTimeSecondHalf?: Date
}
export interface IActionSummary {
    Score: IScore,
    IsCollected?: boolean,
    IsReliable?: boolean
}
export interface IScore {
    Home?: number,
    Away?: number
}
export interface IRegion {
    Id?: number,
    Name: string
}
export interface IMarketType {
    Id?: number,
    Name: string,
    IsHandicap: boolean
}
export interface ISelection {
    Id?: number,
    Name: string,
    TradingStatus: string,
    CompetitorId?: number,
    Decimal: number,
    ShortName: string
}
export interface IBasketballMatchSummary {
    FixtureId: string,
    Scores: IBasketballScores,
    FoulCount: IBasketballScore,
    NumberOfFreeThrowsRemaining?: number,
    Possession: string,
    PossessionArrowDirection: string,
    CurrentPhase: string,
    OvertimeCount?: number,
    IsClockRunning?: boolean,
    TimeToPeriod:string
    //TimeRemainingInPhaseAtTimestamp: ITimeRemainingInPhaseAtTimestamp
}
export interface IBasketballScore {
    Home?: number,
    Away?: number
}
export interface IBasketballScores {
    FirstTeamToScore: string,
    LastTeamToScore: string,
    FirstQuarterScore: IBasketballScore,
    SecondQuarterScore: IBasketballScore,
    ThirdQuarterScore: IBasketballScore,
    FourthQuarterScore: IBasketballScore,
    FirstHalfScore: IBasketballScore,
    SecondHalfScore: IBasketballScore,
    OvertimeScore: IBasketballScore,
    RegulationTimeFinalScore: IBasketballScore,
    CurrentScore: IBasketballScore
}