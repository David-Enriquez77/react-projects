//creando un componente con props, van con PascalCase
//los props van como un solo objeto, entre llaves, si queremos acceder a ellos hay que hacer destructuring
export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
  isFollowing,
}) {
  //funcion para añadir arroba
  const addAt = (userName) => `@${userName}`;
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
        ></img>
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Follow</button>
      </aside>
    </article>
  );
}
