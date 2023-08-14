import { Profile } from './ProfileF/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import user from '../data/user.json';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList.jsx';
import friends from '../data//friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import items from '../data//transactions.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title={'Upload Stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
