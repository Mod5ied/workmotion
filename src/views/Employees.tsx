import StateBar from "../components/StateBar";

interface Employee {
    firstname: string;
    lastname: string;
    state: string;
}

interface onUpdate {
    id: Number;
    state: string;
    fixedState: string;
}

interface Props {
    employee: Employee
    onUpdate: (arg: onUpdate) => void;
}

const Employees: React.FC<Props> = ({employee, onUpdate}) => {
  return (
    <div className="employees">
        <>
        {/* most probably an employee image would be rendered. */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </>
      <section className="relative flex gap-2 font-semibold text-slate-600">
        <h3> {employee.firstname} </h3>
        <h3> {employee.lastname} </h3>
      </section>
      <>
        <>
          <StateBar {...employee} onUpdate={onUpdate} />
        </>
      </>
    </div>
  )
}

export default Employees