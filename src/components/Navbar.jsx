import lg_logo from '../images/lg_logo.jpg'

export const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <div className="logo-img">
                        <img src={lg_logo} alt="logo" />
                    </div>
                    <h1>Language Translator</h1>
                </div>
            </div>
        </>
    );
};