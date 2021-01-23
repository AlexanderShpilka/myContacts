import './Humburger.css';

interface HumburgerProps {
  isOpen: boolean;
  onClickHandler: () => void;
}

export const Humburger = ({ isOpen, onClickHandler }: HumburgerProps) => {
  const humburgerClassName = isOpen ? 'humburger humburger--open' : 'humburger';

  return (
    <div className={humburgerClassName} onClick={onClickHandler}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
