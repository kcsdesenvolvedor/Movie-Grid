import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-6 text-center mt-8">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-gray-400 hover:text-white" />
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-gray-400 hover:text-white" />
        </a>
        <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-gray-400 hover:text-white" />
        </a>
      </div>
    </footer>
  );
}