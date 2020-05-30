import loginReducer, { Types } from '../../../store/login';

describe('Login Reducers', () => {
  it('handle action type LOGIN_USER', () => {
    const action = {
      type: Types.LOGIN_USER,
      payload: { name: 'NGO Pandas', id: 123 },
    };

    const newReducer = loginReducer({ isAuthenticated: false, id: null, ongName: null }, action);

    expect(newReducer).toEqual({ isAuthenticated: true, id: 123, ongName: 'NGO Pandas' });
  });

  it('handle action type LOGOUT_USER', () => {
    const action = {
      type: Types.LOGOUT_USER,
      payload: {},
    };

    const newReducer = loginReducer({ isAuthenticated: true, id: 123, ongName: 'NGO Pandas' }, action);

    expect(newReducer).toEqual({ isAuthenticated: false, id: null, ongName: null });
  });
});
