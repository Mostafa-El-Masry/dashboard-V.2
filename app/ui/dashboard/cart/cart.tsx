
import { ImUsers } from "react-icons/im";

const Cart = () => {
  return (
    <div className="flex content-container  justify-between">
      <div className="flex cartcard rounded-2xl m-2">
        <div className="p-3">
          <span>
            <ImUsers />
          </span>
        </div>
        <div className="flex flex-1 flex-col pt-3 pr-4">
          <span className="pb-2">Total Users</span>
          <span className="pb-2">10.928</span>
          <span className="pb-2">12% more than prvious week</span>
        </div>
      </div>
      <div className="flex cartcard rounded-2xl m-2">
        <div className="p-3">
          <span>
            <ImUsers />
          </span>
        </div>
        <div className="flex flex-1 flex-col pt-3 pr-4">
          <span className="pb-2">Total Users</span>
          <span className="pb-2">10.928</span>
          <span className="pb-2">12% more than prvious week</span>
        </div>
      </div>
      <div className="flex cartcard rounded-2xl m-2">
        <div className="p-3">
          <span>
            <ImUsers />
          </span>
        </div>
        <div className="flex flex-1 flex-col pt-3 pr-4">
          <span className="pb-2">Total Users</span>
          <span className="pb-2">10.928</span>
          <span className="pb-2">12% more than prvious week</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
