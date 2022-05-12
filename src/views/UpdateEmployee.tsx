import React, { ReactEventHandler, useState } from "react";

interface Employee {
  firstname: string;
  lastname: string;
  id: string | number;
}

interface Props {
  onUpdateRecord(arg: Employee): () => void;
}

const UpdateEmployee: React.FC<Props> = ({ onUpdateRecord }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstname || !lastname) {
      alert("Add state");
      return;
    }
    onUpdateRecord({ firstname, lastname, id });
    setId("");
    setFirst("");
    setLast("");
  };
  const [id, setId] = useState("");
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");

  return (
    <div className="flex items-center w-2/5 h-full m-auto">
      <form onSubmit={handleSubmit} className="form">
        <span className="form-span">
          <label className="text-lg font-semibold text-gray-600">
            Employee ID
          </label>
          <input
            type="number"
            placeholder="Enter employee ID"
            className="form-input"
            value={id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
          />
        </span>
        <span className="form-span">
          <label className="text-lg font-semibold text-gray-600">
            First name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-input"
            value={firstname}
            onChange={(e) => setFirst(e.target.value)}
          />
        </span>
        <span className="form-span">
          <label className="text-lg font-semibold text-gray-600">
            Last name
          </label>
          <input
            type="text"
            placeholder="Enter your lastname"
            className="form-input"
            value={lastname}
            onChange={(e) => setLast(e.target.value)}
          />
        </span>

        <span className="flex justify-center p-2">
          <input type="submit" value="Submit" className="submit" />
        </span>
      </form>
    </div>
  );
};

export default UpdateEmployee;
