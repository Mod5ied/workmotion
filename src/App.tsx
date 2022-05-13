import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreateEmployee from "./views/CreateEmployee";
import EmployeeCards from "./components/EmployeeCards";

type Fetch = (id?: string | number) => Promise<Employee[]>;
type FetchVoid = () => Promise<void>;
interface Employee {
  id?: number;
  firstName?: string;
  lastName?: string;
  state?: string;
}
interface Record {
  fixedState?: string;
  id: string;
  state: string;
}

const App: React.FC = () => {
  const [employees, updateEmployees] = useState<Employee[]>([]);

  //create employee.
  const createEmployee = async (record: Employee) => {
    const res = await fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(record), //converts js object to a json string.
    });
    const data = await res.json();

    updateEmployees([...employees, record]);
  };
  const getRecords: FetchVoid = async () => {
    const records = await fetchRecords();
    updateEmployees(records);
  };
  //fetch employee records on initial load.
  useEffect(() => {
    getRecords(); //react18 useEffect runs quite odd these days!
  }, [employees]); //array dependency prevents StateBar from instant re-render.

  //fetch records function. {quite reusable to a degree.}
  const fetchRecords: Fetch = async () => {
    const res = await fetch("http://localhost:5000/employees");
    const data = await res.json();
    return data;
  };

  //fetch a single record {vital for update}.
  const fetchRecord: Fetch = async (id: number | string | undefined) => {
    const res = await fetch(`http://localhost:5000/employees/${id}`);
    const data = await res.json();
    return data;
  };

  //updates the state of employees on click
  const updateState = async (arg: Record) => {
    const recordToUpdate = await fetchRecord(arg.id);
    const updatedRecord = { ...recordToUpdate, state: arg.fixedState };

    try {
      let res = await fetch(`http://localhost:5000/employees/${arg.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedRecord),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      console.log(response);
    } catch (err) {
      return err;
    }
  };
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row justify-between h-screen bg-gray-100">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <EmployeeCards employees={employees} onUpdate={updateState} />
              }
            >
              {/* routes for employee */}
            </Route>
            <Route
              path="/employee/add"
              element={<CreateEmployee onRecord={createEmployee} />}
            >
              {/* routes for adding employee */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
