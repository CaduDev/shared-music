import { createStore, compose, applyMiddleware } from 'redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers, midllewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...midllewares))
      : applyMiddleware(...midllewares);

  return createStore(reducers, enhancer);
};
