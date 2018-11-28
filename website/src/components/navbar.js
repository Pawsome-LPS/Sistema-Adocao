import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";

 class NavbarPage extends React.Component {

     state = {
         isOpen: false
     };

     toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

     render() {
         return (
             <Navbar color="default-color" dark expand="md" style={{marginTop: "0px"}}>
                 {/* Nome */}
                 <NavbarBrand>
                     <NavLink to="/"><strong className="white-text"><Fa icon="paw" className="ml-1"/> Pawsome</strong></NavLink>
                 </NavbarBrand>

                 <NavbarToggler onClick={this.toggleCollapse} />
                 <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

                     {/* Links a esquerda */}
                     <NavbarNav left>
                         <NavItem active>
                             <NavLink to="/">Home</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink to="/cadastro_pet">Cadastrar Amigo</NavLink>
                         </NavItem>
                     </NavbarNav>

                     {/* Links a direita */}
                     <NavbarNav right>
                         <NavItem>
                             <Dropdown>
                                 <DropdownToggle nav caret>
                                     <Fa icon="user" />
                                 </DropdownToggle>
                                 <DropdownMenu className="dropdown-default" right>
                                     <DropdownItem href="#!">Configuraçoes da Conta</DropdownItem>
                                     <DropdownItem href="#!">Meus Amigos Cadastrados</DropdownItem>
                                     <hr />
                                     <DropdownItem href="#!">Sair</DropdownItem>
                                 </DropdownMenu>
                             </Dropdown>
                         </NavItem>
                     </NavbarNav>
                 </Collapse>
             </Navbar>
         );
     }
 }

 export default NavbarPage;