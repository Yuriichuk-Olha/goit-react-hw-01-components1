import ProfileUser from 'components/Profile/ProfileUser';
import user from '../components/Profile/user.json';

import StatisticsList from 'components/Statistics/StatisticsList';
import data from '../components/Statistics/data.json';

import FriendListItem from 'components/Friends/FriendListItem';
import friend from '../components/Friends/friends.json';

import TransactionsHistory from 'components/Transactions/TransactionsHistory';
import transactions from '../components/Transactions/transactions.json';

export const App = ({children}) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <ProfileUser users={user} />,
    <StatisticsList title="Upload stats" stats={data} />,
    <StatisticsList stats={data}/>,
    <FriendListItem friends={friend}/>,
    <TransactionsHistory items={transactions}/>,
      {children}
    </div>
  );
};
