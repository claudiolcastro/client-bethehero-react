import profileReducer, { Types } from '../../../store/profile';

describe('Profile Reducers', () => {
  it('handle action type ADD_ONG_INCIDENTS', () => {
    const action = {
      type: Types.ADD_ONG_INCIDENTS,
      payload: [{ title: 'Incident 1', value: 100 }, { title: 'Incident 2', value: 45 }],
    };

    const newReducer = profileReducer({ ongIncidents: [] }, action);

    expect(newReducer).toEqual({
      ongIncidents: [{ title: 'Incident 1', value: 100 }, { title: 'Incident 2', value: 45 }],
    });
  });
});
