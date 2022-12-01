import React, { ReactElement, useRef, useState } from "react";
import { FormControl, FormCreate, FormRow, Container } from "./create.styled";
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

function CreateNew({}: Props) {
  const dateRef: any = useRef();
  const monthRef: any = useRef();

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
      `${monthRef.current.value} ${date} 2022 ${time}:00`
    );

    axios({
      method: "post",
      url: `${API}/api/nimones-all-data`,
      data: {
        userData: {
          firstName: target.firstName.value,
          lastname: target.lastName.value,
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
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <FormCreate onSubmit={insertAPI}>
          <FormRow>
            <FormControl>
              <label>ชื่อ</label>
              <input name="firstName" type="text" placeholder="ชื่อ" />
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
                  name="date"
                  placeholder="วันที่"
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
              <input
                name="monk"
                type="number"
                max={10}
                min={1}
                placeholder="พระ"
              />
            </FormControl>

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
