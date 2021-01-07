import {Nav, NavbarBrand, NavItem, NavLink} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <div>
            <Nav color="light" light expand="md">
                <NavbarBrand href="/">pizza_maker</NavbarBrand>
                <NavItem>
                    <NavLink href="/components/order/pizza">Pizza</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/order/calzone">Calzone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/ingredience">Ingredience</NavLink>
                </NavItem>
            </Nav>
            <hr />
        </div>
    )
}

export default Navigation;