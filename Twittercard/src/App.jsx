import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <div className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName={"David_Enriquez"}
        name={"David"}
      />
      <TwitterFollowCard
        //se pasa solo la funcion, pero no se ejecuta, el parametro lo recibe en e
        formatUserName={formatUserName}
        isFollowing
        userName={"David_EH"}
        name={"David"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName={"David_Hd"}
        name={"David"}
      />
    </div>
  );
}

export default App;
