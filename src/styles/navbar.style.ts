import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 21px;
  }
`;

export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    outline: 0;
    color: #fff;
    font-size: 18px;

    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }

  .dropdown-root {
    z-index: 10;
    position: absolute;
  }

  .dropdown-arrow {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      background: #fff;
      top: -6.5px;
      left: -8px;
      border-radius: 4px 0 0 0;
      transform: rotate(45deg);
    }
  }

  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: -3px -3px 5px rgb(82, 95, 127, 0.04);

    background: #fff;
    border-radius: 4px;
  }

  .dropdown-section {
    position: absolute;
  }
  .dropdown-background {
    position: absolute;
    bottom: 0;
    background: #f6f7fc;
    width: 100%;
  }
`;
