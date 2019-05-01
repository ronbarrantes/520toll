const logMiddleware = ({ getState , dispatch }) => (next) => (action) => {
  console.log('ACTION->', action)
  next(action)
}

export default logMiddleware