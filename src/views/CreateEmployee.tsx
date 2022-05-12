import { useState } from "react";
// import PropTypes from 'prop-types'
interface Record {
  firstname?: string;
  lastname?: string;
  state?: string;
}

interface Props {
  onRecord(arg: Record): (arg: Record) => void;
}

const CreateEmployee: React.FC<Props> = ({ onRecord }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstname || !lastname || !state) {
      alert("Add firstname and lastname!");
      return;
    }
    onRecord({ firstname, lastname, state });
    setFirst("");
    setLast("");
    setState("");
  };
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [state, setState] = useState("");
  return (
    <div className="flex items-center w-2/5 h-full m-auto">
      <form onSubmit={handleSubmit} className="form">
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
        <span className="justify-start form-span">
          <label className="text-lg font-semibold text-gray-600">
            Current State
          </label>
          <input
            type="text"
            placeholder="Enter your lastname"
            className="form-input"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </span>
        <span className="flex justify-center p-2">
          <input type="submit" value="Submit" className="submit" />
        </span>
      </form>
    </div>
  );
};

export default CreateEmployee;
