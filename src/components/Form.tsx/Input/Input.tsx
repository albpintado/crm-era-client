type InputProps = {
  name: string;
  text: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ name, text, changeHandler }: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        type="text"
        id={name}
        placeholder={text}
        onChange={changeHandler}
      />
    </>
  );
};

export default Input;
