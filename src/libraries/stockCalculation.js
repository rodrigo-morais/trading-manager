const getDirection = (start, stop) => start > stop ? 'Venda' : 'Compra'

const getDifference = (start, stop) => Math.abs(start - stop)

const getRisk = (stock, difference, valuePerTick) => {
  switch (stock.substr(0, 3)) {
    case 'WIN': return difference * valuePerTick
    case 'WDO': return difference * valuePerTick
    default: return difference
  }
}

export {
  getDirection,
  getDifference,
  getRisk,
}
