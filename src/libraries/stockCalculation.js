const getDirection = (start, stop) => start > stop ? 'Venda' : 'Compra'

const getDifference = (start, stop) => Math.abs(start - stop)

export {
  getDirection,
  getDifference,
}
