import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Record {
  firstname: string;
  lastname: string;
  state: string;
}
interface Props {
  onRecord(arg: Record): (arg: Record) => void;
}

const CreateEmployee: React.FC<Props> = ({ onRecord }) => {
  const navigate = useNavigate();
  const [firstname, setFirst] = useState<string>("");
  const [lastname, setLast] = useState<string>("");
  const [state, setState] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    // if (!firstname || !lastname || !state) {
    //   alert("Add firstname and lastname!");
    //   return;
    //   /* Yea i could have done a better job at validation, trust me I can code lol!! */
    // }
    //yup, snackbar-toastr
    onRecord({ firstname, lastname, state });
    setFirst("");
    setLast("");
    setState("");
    navigate("/");
  };

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <div className="flex flex-col items-center m-auto h-3/4 w-2/5 shadow-sm border rounded-md bg-gray-50">
      <div className="flex flex-col p-3 w-1/2 gap-3 my-auto">
        <TextField
          required
          id="outlined-required"
          label="Enter FirstName"
          defaultValue=""
          onChange={(e) => setFirst(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Enter LastName"
          defaultValue=""
          onChange={(e) => setLast(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="State"
            onChange={handleChange}
          >
            <MenuItem value={10}>Added</MenuItem>
            <MenuItem value={20}>In-check</MenuItem>
            <MenuItem value={30}>Approved</MenuItem>
            <MenuItem value={30}>Active</MenuItem>
            <MenuItem value={30}>Inactive</MenuItem>
          </Select>
        </FormControl>
        <span className="flex justify-center p-2">
          <input
            type="submit"
            value="Submit"
            className="submit"
            onClick={(event) => handleSubmit(event)}
          />
        </span>
      </div>
    </div>
  );
};

export default CreateEmployee;
