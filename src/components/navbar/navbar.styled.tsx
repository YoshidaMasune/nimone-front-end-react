import Styled from "styled-components";

export const NavbarCon = Styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 2rem;
`

export const Menu = Styled.ul`
   display: flex;
   gap: 1rem;
   list-style-type: none;

   a {
      text-decoration: none;
   }
`