import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import TodosPage from "../ui/dashboard/todos/page";

const DashBoard = () => {
  return (
    <div className="flex flex-row justify-between gap-3">
      <div className="flex flex-4 flex-col gap-3">
        <div className="flex-1 mt-5 mb-5">
          <TodosPage />
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
};

export default DashBoard;
