import React from "react";
import { Container, DropdownStyles } from "../../styles/navbar.style";
import DropdownOption from "../Dropdown";
import { DropdownProvider } from "../Dropdown/Provider";
import { Products, Developers, Company } from "../Content";
import { DropdownRoot } from "../Dropdown/root";

function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Product"
                content={Products}
                backgroundHight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Developers"
                content={Developers}
                backgroundHight={215}
              />
            </li>
            <li>
              <DropdownOption
                name="Company"
                content={Company}
                backgroundHight={222}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default NavBar;
