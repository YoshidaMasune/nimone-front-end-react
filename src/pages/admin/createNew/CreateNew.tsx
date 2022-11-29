import React from 'react'
import { FormControl, FormCreate } from './create.styled'
import axios from 'axios'

type Props = {}

function CreateNew({}: Props) {

  const insertAPI = (e:any) => {
    e.preventDefault()

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
          <input name='date' type="date" placeholder='วันที่' />
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