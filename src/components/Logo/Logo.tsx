import logo from './logo.png';
import './Logo.css';

interface LogoProps {
  height: string;
}

export const Logo = ({ height }: LogoProps) => {
  return (
    <div className="logo">
      <img src={logo} style={{ height }} alt="Logo." />
      <span className="logo-text">myContacts</span>
    </div>
  );
};
