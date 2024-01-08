import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #0e0a20;
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  height: 50px;
`;

const NavbarLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    padding-bottom: 20px;
    background-color: #0e0a20;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fe9c13;
  }

  @media (max-width: 768px) {
    margin: 10px 15px;
  }
`;

const HamburgerIcon = styled.div`
  color: white;
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "Loan", path: "/loan" },
    { title: "Calculator", path: "/calculator" },
    { title: "Login", path: "/login" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarLogo to="/" isOpen={isOpen}>
        SyLoan
      </NavbarLogo>
      <NavbarLinks isOpen={isOpen}>
        {links.map((link, index) => (
          <NavbarLink key={index} to={link.path}>
            {link.title}
          </NavbarLink>
        ))}
      </NavbarLinks>
      <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
    </NavbarContainer>
  );
};
