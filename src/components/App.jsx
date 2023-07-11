import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from './Statistics/Statistics';
import data from "./Statistics/data.json";
import FriendList from  "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import Transactions from "./Transactions/Transactions";
import transactions from "./Transactions/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        fontSize: 40,
        color: '#010101',
        padding: 40,
      }}
    >
     <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload Stats" stats={data}/>

    <FriendList friends={friends}/>
    <Transactions items={transactions}/>
    </div>
  );
};
