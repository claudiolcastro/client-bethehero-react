import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addName } from './store/profile';

function Test({ name, addMyName }) {
  return (
    <div>
      <h2>{name}</h2>
      <button type="button" onClick={() => addMyName('Claudio')}>Change name</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ name: state.profile.name });

const mapDispathToProps = (dispatch) => bindActionCreators({ addMyName: addName }, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Test);
