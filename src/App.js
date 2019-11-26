import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faRecycle } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import Header from './component/Header';
import './App.css';

class App extends React.Component {
  state = {
    count: 0
  };

  onPlusClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  onMinusClick = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  onResetClick = () => {
    this.setState(() => ({ count: 0 }));
  };

  render() {
    return (
      <div className='body'>
        <Header />
        <div className='card'>
          <div className='card-body'>
            <div id='numLabel'>{this.state.count}</div>

            <div id='buttonDiv'>
              <button className='btn btn-success' onClick={this.onPlusClick}>
                <FontAwesomeIcon icon={faPlus} size='2x' />
              </button>
              <button className='btn btn-warning' onClick={this.onResetClick}>
                <FontAwesomeIcon icon={faRecycle} size='2x' />
              </button>
              <button className='btn btn-danger' onClick={this.onMinusClick}>
                <FontAwesomeIcon icon={faMinus} size='2x' />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  count: 0
};

App.propTypes = {
  count: propTypes.number
};

export default App;
