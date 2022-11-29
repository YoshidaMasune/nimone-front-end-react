import React from 'react'
import { FormControl, FormCreate } from './create.styled'
import axios from 'axios'

type Props = {}

function CreateNew({}: Props) {

  const insertAPI = (e:any) => {
    e.preventDefault()
    // e.target.time.value = '1669730603239'
    const valueDate = new Date(`Sat Nov 08 2022 17:30:00`);

    console.log(valueDate)


    // axios({
    //   method: "post",
    //   url: "http://localhost:3000/api/nimones-all-data",
    //   data: {
    //     userData: {

    //     },
    //     addressData: {
          
    //     },
    //     workData: {

    //     }
    //   }
    // })
  } 
  return (
    <div>
      <FormCreate onSubmit={insertAPI}>
        <FormControl>
          <label>ชื่อ</label>
          <input name='firstNamee' type="text" placeholder='ชื่อ' />
        </FormControl>
        <FormControl>
          <label>สกุล</label>
          <input name='lastName' type="text" placeholder='สกุล' />
        </FormControl>

        <FormControl>
          <label>ติดต่อ</label>
          <input name='tell' type="text" placeholder='เบอร์' />
        </FormControl>

        <FormControl>
          <label>เนื่องในงาน</label>
          <input name='workType' type="text" placeholder='เนื่องในงาน' />
        </FormControl>

        <FormControl>
          <label>เวลา</label>
          <input  name='time' type="time" placeholder='เวลา' />
        </FormControl>

        <FormControl>
          <label>วันที่</label>
          <input type="number" min={1} max={31} placeholder='วันที่' />
          <select name="month" id="">
            <option value="jen">มกราคม</option>
          </select>
        </FormControl>

        <FormControl>
          <label>สถานที่</label>
          <select name="location" id="">
            <option value="วิหาร">วิหาร</option>
            <option value="ศาลา">ศาลา</option>
          </select>
        </FormControl>

        <FormControl>
          <label>พระ</label>
          <input type="number" max={10} min={1} placeholder='พระ' />
        </FormControl>

        <FormControl>
          <label>หมายเหตุ</label>
          <input name='detail' type="text" placeholder='หมายเหตุ' />
        </FormControl>

        <button>ตกลง</button>
      </FormCreate>
    </div>
  )
}

export default CreateNew