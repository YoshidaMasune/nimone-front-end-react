import React from 'react'
import { Menu, NavbarCon } from './navbar.styled'

type Props = {}

function Navbar({}: Props) {
  return (
    <div>
      <NavbarCon>
         <div>
            <div>
               <h1>logo</h1>
            </div>
         </div>

         <div>
            <Menu>
               <li><a href="/">หน้าเเรก</a></li>
               <li><a href="/admin">เจ้าหน้าที่</a></li>
            </Menu>
         </div>
      </NavbarCon>
    </div>
  )
}

export default Navbar