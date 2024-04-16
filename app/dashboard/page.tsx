import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

const DashBoard = () => {
  return (
    <div className="flex flex-row justify-between gap-3">
      <div className="flex flex-4 flex-col gap-3">

        <Transactions />
        <Chart />
      </div>
    </div>
  );
};

export default DashBoard;
