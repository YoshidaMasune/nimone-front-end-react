import Styled from "styled-components";

export const NavbarCon = Styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px 2rem;
`

export const Menu = Styled.ul`
   display: flex;
   gap: 1rem;
   list-style-type: none;
   align-items: center;

   a {
      text-decoration: none;
   }
`