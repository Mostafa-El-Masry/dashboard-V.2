import MenuLink from "../sidebar/menuLink/menuLink";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaAddressBook, FaMoneyBillWave } from "react-icons/fa";
import { FaBarsProgress, FaChalkboardUser } from "react-icons/fa6";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "ToDoS",
        path: "/todos",
        icon: <MdDashboard />,
      },
      {
        title: "NoteBook",
        path: "https://note-book-nine.vercel.app/",
        icon: <FaAddressBook />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaChalkboardUser />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <AiOutlineTransaction />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <FaMoneyBillWave />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <TbReportSearch />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Setting",
        path: "/dashboard/setting",
        icon: <FaBarsProgress />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="p-5">
      <div className="flex justify-center">
        <img src="/img.jpg" alt="Admin booty" className="w-24 rounded-full" />
        <div className="flex flex-col justify-center">
          <span className="p-1">Mostafa</span>
          <span className="p-1">adminstator</span>
        </div>
      </div>
      <ul className="text-lg">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
