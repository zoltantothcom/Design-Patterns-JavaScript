export const submitMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SUBMIT') {
    const id = 'sljabgvqaw7fquy4hebf284jwmhrd';

    action.payload = id;
  }

  next(action);
};
