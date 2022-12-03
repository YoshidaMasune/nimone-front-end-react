import React from "react";
import { FormControl, FormCreate } from "../admin/createNew/create.styled";

type Props = {};

function Login({}: Props) {
  return (
    <div>
      <FormCreate>
        <FormControl>
          <label>userName</label>
          <input type="text" />
        </FormControl>
        <FormControl>
          <label>passWord</label>
          <input type="text" />
        </FormControl>
      </FormCreate>
    </div>
  );
}

export default Login;
