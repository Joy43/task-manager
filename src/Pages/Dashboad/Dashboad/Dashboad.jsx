import { FaHome, FaList } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        {/*---------------- dashboard side bar ------------ */}
        <div className="w-64 min-h-screen text-2xl font-bold bg-[#1d061e]">
          <ul className="menu p-4">
            <li>
              <NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>
                Admin Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/manageProduct">
                <FaList></FaList>
                Manage Items
              </NavLink>
            </li>
            {/* ------------------------------------- */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        {/*------------- dashboard content ------------------*/}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
