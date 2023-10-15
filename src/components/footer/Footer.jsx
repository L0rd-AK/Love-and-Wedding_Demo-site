
const Footer = () => {
    return (
        <footer className="footer p-10 text-black grid grid-cols-2 md:grid-cols-4">
            <aside>
                <img src='https://i.ibb.co/QpYZgbD/logo.jpg' alt="" />
                <p>Viel, Providing Best Service since 2012</p>
            </aside> 
            <nav>
                <header className="footer-title">Services</header> 
                <a className="link link-hover">Branding</a> 
                <a className="link link-hover">Design</a> 
                <a className="link link-hover">Marketing</a> 
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <header className="footer-title">Links</header> 
                <a className="link link-hover">Home</a> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">services</a> 
            </nav> 
            <nav>
                <header className="footer-title">Legal</header> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;