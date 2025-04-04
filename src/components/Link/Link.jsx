const Link = ({route}) => {
  return (
    <div>
      <li>
        <a href={route.pathName}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
