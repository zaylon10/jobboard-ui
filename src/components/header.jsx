import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "@/components/ui/button.jsx";

const Header = () => {
    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link>
                    <img src="logo.png" className="h-20" />
                </Link>
                <Button variant="outlinegit">Login</Button>
            </nav>
        </>
    )
};

export default Header;