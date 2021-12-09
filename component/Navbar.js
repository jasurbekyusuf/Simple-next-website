import Link from 'next/link'
function Navbar() {
    return (
        <div>
            <nav>
                <div className='logo'>
                    <h1>Hello Navbar</h1>
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="about"><a>About</a></Link>
                <Link href="lists"><a>List</a></Link>
            </nav>
        </div>
    )
}

export default Navbar
