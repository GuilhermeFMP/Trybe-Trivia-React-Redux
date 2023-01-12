const INITIAL_STATE = {
  token: '',
  name: '',
  email: '',
};
const info = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TOKEN_AND_INFO_RECEIVED':
    return {
      ...state,
      token: action.payload.token,
      name: action.payload.name,
      email: action.payload.email,
    };
  default:
    return state;
  }
};
export default info;
