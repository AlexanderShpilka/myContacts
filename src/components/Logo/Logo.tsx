import logo from './logo.png';

interface LogoProps {
  height: string;
}

export const Logo = ({ height }: LogoProps) => {
  return <img src={logo} style={{ height: height }} alt="Logo." />;
};
