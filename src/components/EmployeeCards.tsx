import Employees from "../views/Employees";

type EmployeeType = {
  id?: string | number;
  firstname: string;
  lastname: string;
  state: string;
};
interface Props {
  employees: EmployeeType[];
  onUpdate: (event: any) => void;
}

const EmployeeCards: React.FC<Props> = ({ employees, onUpdate }) => {
  return (
    <div className="flex flex-col w-5/6 gap-3 pt-5 mr-5">
      <div className="relative flex items-center justify-around p-2 border-b gap-44 right-10 border-slate-300">
        <section>
          <h2 className="text-lg font-semibold uppercase text-slate-600">
            Employee Data
          </h2>
        </section>
        <section className="text-lg font-semibold uppercase text-slate-600">
          Employee Application Status
        </section>
      </div>
      {/* mapping and creating of data is done here. */}
      {employees.map((employee, index) => (
        <Employees employee={employee} key={index} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default EmployeeCards;
