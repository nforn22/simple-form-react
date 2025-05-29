import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
    Simple Form • Built with React • <FaGithub />{' '}
    <a
        href="https://github.com/nforn22" 
        target="_blank"
        className="footer-link"
    >
        Made by <strong>nforn22</strong>
    </a>
</footer>
  );
};

export default Footer;
