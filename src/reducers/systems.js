const initialState = [
  {
    id: 1,
    name: 'Price Action 5 min',
    stock: 'WDO',
    LossPerDay: 400,
    PerecentPerOperation: 50,
    NormalLots: 8,
    OpeningLots: 2,
    PercentGaing: 70,
    OpeningSmallPoints: 8,
    OpeningMediumPoints: 14,
    OpeningBigPoints: 18,
    NormalSmallPoints: 16,
    NormalMediumPoints: 22,
    NormalBigPoints: 30,
    MaxPoints: 34,
    LossFromTop: 100,
    PercentLossFromTop: 25,
  },
  {
    id: 2,
    name: 'Price Action 5 min',
    stock: 'WIN',
    LossPerDay: 400,
    PerecentPerOperation: 60,
    NormalLots: 6,
    OpeningLots: 4,
    PercentGaing: 70,
    OpeningSmallPoints: 200,
    OpeningMediumPoints: 350,
    OpeningBigPoints: 500,
    NormalSmallPoints: 350,
    NormalMediumPoints: 600,
    NormalBigPoints: 800,
    MaxPoints: 1200,
    LossFromTop: 100,
    PercentLossFromTop: 25,
  },
]

const systemsReducer = (state = initialState) => state

export default systemsReducer
