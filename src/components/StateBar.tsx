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
    <div className="flex p-3 border ">
      <div
        /* each renders styles conditionally based on {state👆} hence, persists. */
        className={
          state == states.stateOne ? "state-active" : "state-active-start"
        }
      >
        <button
          onClick={() => handleUpdate(id, states.stateOne)}
          className="w-full"
        >
          {states.stateOne}
        </button>
      </div>
      <div
        className={
          state == states.stateTwo
            ? "state-active right-8 z-40"
            : "z-40 state-inactive right-8"
        }
      >
        <button
          onClick={() => handleUpdate(id, states.stateTwo)}
          className="w-full ml-6"
        >
          {states.stateTwo}
        </button>
      </div>
      <div
        className={
          state == states.stateThree
            ? "state-active right-14 z-30"
            : "z-30 state-inactive right-14"
        }
      >
        <button
          onClick={() => handleUpdate(id, states.stateThree)}
          className="w-full ml-5"
        >
          {states.stateThree}{" "}
        </button>
      </div>
      <div
        className={
          state == states.stateFour
            ? "state-active right-20 z-20"
            : "z-20 state-inactive right-20"
        }
      >
        <button
          onClick={() => handleUpdate(id, states.stateFour)}
          className="w-full ml-6"
        >
          {" "}
          {states.stateFour}{" "}
        </button>
      </div>
      <div
        className={
          state == states.stateFive
            ? "state-active right-28 z-10"
            : "state-active-end"
        }
      >
        <button
          onClick={() => handleUpdate(id, states.stateFive)}
          className="w-full"
        >
          {states.stateFive}{" "}
        </button>
      </div>
    </div>
  );
};

export default StateBar;
