import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

type RespType = {
  WID: number;
  address: {
    Home_number: number;
    Muu_number: number;
    Khet: string;
    Ampao: string;
    city: string;
  };
  detai: string;
  location: string;
  monk: number;
  time: Date | null;
  time_edit: Date | null;
  user: {
    firstName: string;
    lastName: string;
    tell: string;
    tell2?: string;
  };
  user_edit: string;
  workType: string;
};

import { API } from "../../App";
import {
  FormControl,
  FormCreate,
  FormRow,
} from "../admin/createNew/create.styled";

function Home({}: Props) {
  const [ResPonseApi, setResPonseApi] = useState<Array<RespType>>();
  const apiUrl = `${API}/api/nimones-all-data`;
  const FnameRef: any = useRef();
  const LnameRef: any = useRef();
  useEffect(() => {
    axios
      .get(apiUrl + ``)
      .then((res) => setResPonseApi(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getData = (e: any) => {
    e.preventDefault();
    const firstName = FnameRef.current.value;
    const lastName = LnameRef.current.value;

    if (firstName === "" && lastName === "") {
      axios
        .get(API + `/api/nimones-all-data?`)
        .then((res) => setResPonseApi(res.data));
    } else if (firstName !== "" && lastName === "") {
      axios
        .get(API + `/api/nimones-all-data?firstName=${firstName}`)
        .then((res) => setResPonseApi(res.data));
    } else if (lastName !== "" && firstName === "") {
      axios
        .get(API + `/api/nimones-all-data?lastName=${lastName}`)
        .then((res) => setResPonseApi(res.data));
    }
  };
  return (
    <div>
      <div>
        <FormCreate onSubmit={getData}>
          <FormRow>
            <FormControl>
              <label>ชื่อ</label>
              <input ref={FnameRef} type="text" placeholder="ชื่อ" />
            </FormControl>
            <FormControl>
              <label>สกุล</label>
              <input ref={LnameRef} type="text" placeholder="สกุล" />
            </FormControl>
          </FormRow>
          <div>
            <button type="submit">ค้นหา</button>
          </div>
        </FormCreate>
      </div>

      <div>
        {!ResPonseApi
          ? null
          : ResPonseApi.map((item, idx) => {
              return (
                <div key={idx}>
                  <p>{item.user.firstName}</p>
                  <p>{item.user.lastName}</p>

                  <br />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Home;
