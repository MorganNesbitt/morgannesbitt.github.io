import React from 'react';

import './App.css';

function Dashboard(props) {
  return (
    <div className="vw100 vh100 bg-blue">
      <header className="wp100 wh100 flex flex-row justify-center items-center">
        <div>Im you dashboard</div>
        <button onClick={() => props.history.goBack()}>teehee</button>
      </header>
    </div>
  );
}

export default Dashboard;
