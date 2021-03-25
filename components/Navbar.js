import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="fixed top-0 h-10 w-full m-0 p-2 bg-transparent flex justify-between z-50">
            <div className="nav-left">
                <Link href="/">
                    <h1>Hello</h1>
                </Link>
            </div>

            <div className="nav-right text-white">
                <ul>
                    <li>
                        <h2>Good-bye</h2>
                    </li>
                    
                    <li>
                        <h2>About</h2>
                    </li>

                    <li>
                        <h2>Contact</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}