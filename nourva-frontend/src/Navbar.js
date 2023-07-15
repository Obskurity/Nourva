const Navbar = () => {
    const name = "Nourva"
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            {/*<h1> Nourva</h1> */}
            <div className = 'home'>
                <a href="/">
                    <p>{name}</p></a>
            </div>
            <div className = 'links'>
                <a href="/signup">Sign Up</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;


