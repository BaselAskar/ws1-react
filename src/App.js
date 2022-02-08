import "./App.css";
import Card from "./components/global/Card";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <div>
      <Card className="mt-5 mx-auto bg-light">
        <DataTable />
      </Card>
    </div>
  );
};

export default App;
