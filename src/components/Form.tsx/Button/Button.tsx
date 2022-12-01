type ButtonProps = {
  text: string;
  clickHandler: () => void;
};

const Button = ({ text, clickHandler }: ButtonProps): JSX.Element => {
  return <button onClick={clickHandler}>{text}</button>;
};

export default Button;
