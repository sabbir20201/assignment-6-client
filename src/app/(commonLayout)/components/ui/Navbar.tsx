"use client"
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


const CustomerNavbar = () => {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <>
            <Navbar className="p-0 m-0" disableAnimation isBordered>
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle />
                </NavbarContent>
                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit"> Recipeee</p>
                    </NavbarBrand>
                </NavbarContent>


                <div className="">
                    <NavbarContent className="flex sm:ml-48">
                        {/* <div className="flex justify-end"> */}
                        <NavbarItem>
                            <Link color="foreground" href="/">
                                Home
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="/" aria-current="page" color="warning">
                                Latest
                            </Link>
                        </NavbarItem>
                        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
                        {/* </div> */}
                    </NavbarContent>
                </div>
                <NavbarContent justify="end">
                <NavbarItem>
                        <Button as={Link} color="warning" href="/dashboard" className="hidden lg:block" variant="flat">
                       <span className="mt-3">Dashboard</span>
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="/login">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="warning" href="/register" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                 
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>



    );
};

export default CustomerNavbar;