import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import ProfileUser from 'components/Profile/ProfileUser';
import user from 'components/Profile/user.json';

import StatisticsList from 'components/Statistics/StatisticsList';
import data from 'components/Statistics/data.json';
//  <StatisticsList stats={data} />
// console.log(stats)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App>
      
    <ProfileUser users={user} />,
    <StatisticsList title="Upload stats" stats={data} 
    
    />,
   

    </App>
  </React.StrictMode>
);
