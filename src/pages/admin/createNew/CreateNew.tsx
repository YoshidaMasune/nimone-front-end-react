import React, { ReactElement, useRef, useState } from "react";
import {
  FormControl,
  FormCreate,
  FormRow,
  Container,
  FormLocation,
} from "./create.styled";
import axios from "axios";
import { API } from "../../../App";

type Props = {};
type MonthPopu = {
  string: string;
  value: string;
};

const months_th = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function populateMonth(): Array<MonthPopu> {
  return months_th.map((mth, idx) => {
    return {
      string: mth,
      value: month[idx],
    };
  });
}

// ============  main ============

function CreateNew({}: Props) {
  const dateRef: any = useRef();
  const monthRef: any = useRef();
  const locationRef: any = useRef();
  const [locationToggle, setLocationToggle] = useState(false);

  const MonthEvent = () => {
    let monthsec = monthRef.current;
    let dateSet = dateRef.current;
    const month31 = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];
    const month30 = ["Apr", "Jun", "Sep", "Nov"];
    if (month31.includes(monthsec.value)) {
      dateSet.max = 31;
    } else if (month30.includes(monthsec.value)) {
      dateSet.max = 30;
    } else {
      dateSet.max = 28;
    }
  };

  const insertAPI = (e: any) => {
    e.preventDefault();
    const date = e.target.date.value;
    const time = e.target.time.value;
    const target = e.target;
    const valueDate = new Date(
      `${monthRef.current.value} ${date} ${target.year.value} ${time}:00`
    );

    axios({
      method: "post",
      url: `${API}/api/nimones-all-data`,
      data: {
        userData: {
          firstName: target.firstName.value,
          lastName: target.lastName.value,
          tell: target.tell.value,
        },
        addressData: {},
        workData: {
          workType: target.workType.value,
          time: valueDate,
          detail: target.detail.value,
          monk: target.monk.value,
          location: target.location.value,
        },
      },
    }).catch((err) => console.log(err));
  };

  const displayLocation = (e: any) => {
    if (e.target.value === "ข้างนอก") {
      locationRef.current.style = `
        display: block;
      `;
    } else {
      locationRef.current.style = `
        display: none;
      `;
    }
  };

  return (
    <div>
      <Container>
        <FormCreate onSubmit={insertAPI}>
          <FormRow>
            <FormControl>
              <label>ชื่อ</label>
              <input
                required
                name="firstName"
                type="text"
                placeholder="ชื่อ"
                autoComplete="none"
              />
            </FormControl>
            <FormControl>
              <label>สกุล</label>
              <input
                name="lastName"
                type="text"
                placeholder="สกุล"
                autoComplete="none"
              />
            </FormControl>

            <FormControl>
              <label>ติดต่อ</label>
              <input
                required
                name="tell"
                type="text"
                placeholder="เบอร์"
                autoComplete="none"
              />
            </FormControl>

            <FormControl>
              <label>เนื่องในงาน</label>
              <input name="workType" type="text" placeholder="เนื่องในงาน" />
            </FormControl>

            <FormControl>
              <label>พระ</label>
              <input
                required
                name="monk"
                type="number"
                max={10}
                min={1}
                placeholder="พระ"
              />
            </FormControl>

            <FormRow>
              <FormControl>
                <label>เวลา</label>
                <input type="number" name="hours" style={{ width: "70px" }} />
              </FormControl>
              <FormControl>
                <input type="number" name="minutes" />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <label>วันที่</label>
                <input
                  required
                  ref={dateRef}
                  type="number"
                  defaultValue={new Date(Date.now()).getDate()}
                  min={1}
                  max={31}
                  name="date"
                  placeholder="วันที่"
                />
              </FormControl>

              <FormControl>
                <label>เดือน</label>
                <select
                  required
                  ref={monthRef}
                  name="month"
                  id=""
                  onChange={MonthEvent}
                  defaultValue={new Date(Date.now()).toLocaleDateString(
                    "default",
                    { month: "short" }
                  )}
                >
                  {populateMonth().map((m) => {
                    return (
                      <option key={m.value} value={m.value}>
                        {m.string}
                      </option>
                    );
                  })}
                </select>
              </FormControl>

              <FormControl>
                <label>ปี</label>
                <select name="year" id="" required>
                  <option value={new Date(Date.now()).getFullYear() + 543}>
                    {new Date(Date.now()).getFullYear() + 543}
                  </option>
                  <option value={new Date(Date.now()).getFullYear() + 544}>
                    {new Date(Date.now()).getFullYear() + 544}
                  </option>
                </select>
              </FormControl>
            </FormRow>

            <FormControl>
              <label>สถานที่</label>
              <select
                onChange={displayLocation}
                name="location"
                id="location"
                required
              >
                <option value="วิหาร">วิหาร</option>
                <option value="ศาลา">ศาลา</option>
                <option value="ข้างนอก">ข้างนอก</option>
              </select>
            </FormControl>

            <FormLocation ref={locationRef}>
              <FormRow>
                <FormControl>
                  <label>บ้านเลขที่</label>
                  <input type="text" />
                </FormControl>
                <FormControl>
                  <label>หมู่</label>
                  <input type="text" />
                </FormControl>
                <FormControl>
                  <label>เเขวง/ตำบล</label>
                  <input type="text" />
                </FormControl>
                <FormControl>
                  <label>เขต/อำเภอ</label>
                  <input type="text" />
                </FormControl>
                <FormControl>
                  <label>จังหวัด</label>
                  <input type="text" />
                </FormControl>
              </FormRow>
            </FormLocation>

            <FormControl>
              <label>หมายเหตุ</label>
              <input name="detail" type="text" placeholder="หมายเหตุ" />
            </FormControl>

            <FormControl>
              <button>ตกลง</button>
            </FormControl>
          </FormRow>
        </FormCreate>
      </Container>
    </div>
  );
}

export default CreateNew;
