const getDirection = (start, stop) => start > stop ? 'Venda' : 'Compra'

const getDifference = (start, stop) => Math.abs(start - stop)

const getRisk = (stock, difference) => {
  switch (stock.substr(0, 3)) {
    case 'WIN': return difference * 0.2
    case 'WDO': return difference * 10
    default: return difference
  }
}

export {
  getDirection,
  getDifference,
  getRisk,
}
