const Link = ({route}) => {
  return (
    <div>
      <li className="hover:bg-gray-300 ">
        <a href={route.pathName}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
