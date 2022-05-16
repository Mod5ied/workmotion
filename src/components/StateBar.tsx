import React, { useReducer } from "react";
import { useState } from "react";

interface Props {
  state: string;
  id: string | number;
  onUpdate(args: Record): () => void;
}
interface Record {
  id: string | number;
  state: string;
  fixedState: string;
}

type Void = (id: string | number, fixedState: string) => void;

const StateBar: React.FC<Props> = ({ state, id, onUpdate }) => {
  // const [state, dispatch] = useReducer(stateReducer, "");
  const initialStates = {
    stateOne: "Added",
    stateTwo: "In-check",
    stateThree: "Approved",
    stateFour: "Active",
    stateFive: "Inactive",
  };
  const [states, setStates] = useState(initialStates);
  const handleUpdate: Void = (id, fixedState) => {
    /* pass it the that we spread from the employee component
     * this would be used to update the original state property.
     */
    onUpdate({ id, state: state, fixedState });
  };
  // we could also clear the states on dblClick {that would be cool😄}.
  return (
    <>
      {/* Bridge */}
      <div className="w-full m-auto ">
        <div
          id="container"
          className="flex justify-center w-full p-2 cursor-pointer"
        >
          <span className={state == states.stateOne ? "spans-active" : "spans"}>
            <div className="para">
              <button
                className={`lowercase ${
                  state == states.stateOne ? "uppercase" : "lowercase"
                }`}
                onClick={() => handleUpdate(id, states.stateOne)}
              >
                {states.stateOne}
              </button>
            </div>
            <div
              className={`z-20 bg-gray-300 triangles ${
                state == states.stateOne ? "triangles-active" : "triangles"
              }`}
            ></div>
          </span>

          <span
            className={`relative right-6 ${
              state == states.stateTwo ? "spans-active" : "spans"
            }`}
          >
            <div className="para">
              <button onClick={() => handleUpdate(id, states.stateTwo)}>
                {states.stateTwo}
              </button>
            </div>
            <div
              className={`z-30 bg-white  ${
                state == states.stateTwo ? "triangles-active" : "triangles"
              }`}
            ></div>
          </span>

          <span
            className={`relative right-12 ${
              state == states.stateThree ? "spans-active" : "spans"
            }`}
          >
            <div className="para">
              <button onClick={() => handleUpdate(id, states.stateThree)}>
                {states.stateThree}
              </button>
            </div>
            <div
              className={`z-40 bg-white ${
                state == states.stateThree ? "triangles-active" : "triangles"
              }`}
            ></div>
          </span>

          <span
            className={`relative right-20 ${
              state == states.stateFour ? "spans-active" : "spans"
            }`}
          >
            <div className="para">
              <button onClick={() => handleUpdate(id, states.stateFour)}>
                {states.stateFour}
              </button>
            </div>
            <div
              className={`z-50 bg-white ${
                state == states.stateFour ? "triangles-active" : "triangles"
              }`}
            ></div>
          </span>

          <span
            className={`relative z-30 right-28 ${
              state == states.stateFive ? "spans-active" : "spans"
            } `}
          >
            <div className="para">
              <button onClick={() => handleUpdate(id, states.stateFive)}>
                {states.stateFive}
              </button>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default StateBar;
