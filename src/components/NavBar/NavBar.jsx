import { useState } from "react";
import Link from "../Link/Link";


import { IoIosMenu,IoMdClose } from "react-icons/io";
const routes = [
  { id: 1, pathName: "/", name: "Home" },
  { id: 2, pathName: "/about", name: "About" },
  { id: 3, pathName: "/contact", name: "Contact" },
  { id: 4, pathName: "/services", name: "Services" },
  { id: 5, pathName: "/blog", name: "Blog" },
  { id: 6, pathName: "/blog/:id", name: "Blog Post" },
  { id: 7, pathName: "/dashboard", name: "Dashboard" },
  { id: 8, pathName: "/profile", name: "Profile" },
  { id: 9, pathName: "/settings", name: "Settings" },
  { id: 10, pathName: "/login", name: "Login" },
];

const NavBar = () => {
    const [open,setOpen] = useState(false)
  return (
    <nav>
        <div className="md:hidden text-2xl " onClick={()=>setOpen(!open)}>
        {
            open===true? <IoMdClose></IoMdClose> :
            <IoIosMenu className=""></IoIosMenu>

        }
         
        </div>
       
      <ul className="md:flex gap-6">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
