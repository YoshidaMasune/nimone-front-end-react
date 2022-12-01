import React, { ReactElement, useRef, useState } from "react";
import { FormControl, FormCreate, FormRow, Container } from "./create.styled";
import axios from "axios";

type Props = {};
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
const months_th_mini = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

var month = [
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

type MonthPopu = {
  string: string;
  value: string;
};

function populateMonth(): Array<MonthPopu> {
  return months_th.map((mth, idx) => {
    return {
      string: mth,
      value: month[idx],
    };
  });
}

function populateDay(month: string): number {
  const month31 = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];
  const month30 = ["Apr", "Jun", "Sep", "Nov"];
  let days: number;
  if (month31.includes(month)) {
    days = 31;
  } else if (month30.includes(month)) {
    days = 30;
  } else if (month31.includes(month) && month30.includes(month)) {
    days = 0;
  } else {
    days = 28;
  }
  return days;
}

function CreateNew({}: Props) {
  const dateRef: any = useRef();
  const monthRef: any = useRef();

  const [days, setDays] = useState(1);
  const insertAPI = (e: any) => {
    e.preventDefault();
    const valueDate = new Date(`Sat Nov 08 2022 17:30:00`);

    console.log(valueDate);
  };

  const DateEvent = (e: any) => {};

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
  return (
    <div>
      <Container>
        <FormCreate onSubmit={insertAPI}>
          <FormControl>
            <label>ชื่อ</label>
            <input name="firstNamee" type="text" placeholder="ชื่อ" />
          </FormControl>
          <FormControl>
            <label>สกุล</label>
            <input name="lastName" type="text" placeholder="สกุล" />
          </FormControl>

          <FormControl>
            <label>ติดต่อ</label>
            <input name="tell" type="text" placeholder="เบอร์" />
          </FormControl>

          <FormControl>
            <label>เนื่องในงาน</label>
            <input name="workType" type="text" placeholder="เนื่องในงาน" />
          </FormControl>

          <FormControl>
            <label>เวลา</label>
            <input name="time" type="time" placeholder="เวลา" />
          </FormControl>

          <FormRow>
            <FormControl>
              <label>วันที่</label>
              <input
                ref={dateRef}
                type="number"
                defaultValue={new Date(Date.now()).getDate()}
                min={1}
                max={31}
                placeholder="วันที่"
                onChange={DateEvent}
                step="2"
              />
            </FormControl>

            <FormControl>
              <label>เดือน</label>
              <select ref={monthRef} name="month" id="" onChange={MonthEvent}>
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
              <select name="years" id="">
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
            <select name="location" id="location">
              <option value="วิหาร">วิหาร</option>
              <option value="ศาลา">ศาลา</option>
              <option value="ข้างนอก">ข้างนอก</option>
            </select>
          </FormControl>

          <FormControl>
            <label>พระ</label>
            <input type="number" max={10} min={1} placeholder="พระ" />
          </FormControl>

          <FormControl>
            <label>หมายเหตุ</label>
            <input name="detail" type="text" placeholder="หมายเหตุ" />
          </FormControl>

          <button>ตกลง</button>
        </FormCreate>
      </Container>
    </div>
  );
}

export default CreateNew;
