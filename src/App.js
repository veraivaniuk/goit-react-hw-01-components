import Container from "components/Container/Container";
import Profile from "./components/profile/Profile";
import users from "./user.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/friendList/FriendList.js";
import friends from "./friends.json";
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './transactions.json';


export default function App() {
  return (
    
    <Container >
      {users.map(({tag, name, location, avatar, stats}) => (
        <Profile
          key={tag}
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
        ))
      }
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

