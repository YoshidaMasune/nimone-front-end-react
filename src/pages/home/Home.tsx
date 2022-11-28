import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

type RespType = {
   WID: number
   address: {
      Home_number: number
      Muu_number: number
      Khet: string
      Ampao: string
      city: string
   }
   detai: string
   location: string
   monk: number
   time: Date|null
   time_edit: Date|null
   user: {
      firstName: string
      lastName: string
      tell: string
      tell2?: string
   }
   user_edit: string
   workType: string
}

function Home({ }: Props) {

   const [ResPonseApi, setResPonseApi] = useState<Array<RespType>>()
   const apiUrl = `http://localhost:3000/`;
   const FnameRef:any= useRef()

   useEffect(() => {
      axios.get(apiUrl + `api/nimones-all-data`).then(res => setResPonseApi(res.data));
   }, [])

   const getData = (e: any) => {
      e.preventDefault();

      const firstName = FnameRef.current.value
      axios.get(apiUrl + `api/nimones-all-data?firstName=${firstName}`).then(res => setResPonseApi(res.data))
   }
   return (
      <div>
         <div>
            <form onSubmit={getData}>
               <div>
                  <label>ชื่อ</label>
                  <input ref={FnameRef} type="text" placeholder='ชื่อ' />
               </div>
               <div>
                  <label>สกุล</label>
                  <input type="text" placeholder='สกุล' />
               </div>

               <div>
                  <button type='submit'>ค้นหา</button>
               </div>
            </form>
         </div>

         <div>
            {
               !ResPonseApi? null: ResPonseApi.map((item, idx) => {
                  return <div key={idx}>
                     <p>{item.user.firstName}</p>
                  </div>
               })
            }
         </div>
      </div>
   )
}

export default Home