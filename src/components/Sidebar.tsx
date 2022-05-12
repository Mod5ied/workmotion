import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <aside className="absolute z-30 flex flex-col w-28 h-full bg-slate-500">
        <nav className="flex flex-col items-center gap-16 mt-20 text-slate-100">
          {/* subsequently would be changed to react routes. */}
          <Link to="/" className="sidebar">
            <span className="flex items-center p-2 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <p className="text-sm font-semibold hover:text-blue-400">
                Verify Employees
              </p>
            </span>
          </Link>
          <Link to="/employee/add" className="sidebar">
            <span className="flex items-center p-2 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              <p className="text-sm font-semibold hover:text-blue-400">
                Add Employee
              </p>
            </span>
          </Link>
          <Link to="/employee/update">
            <span className="flex items-center gap-1 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
              <p className="text-sm font-semibold hover:text-blue-400">
                Update Employee
              </p>
            </span>
          </Link>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
