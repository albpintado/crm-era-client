type InputProps = {
  name: string;
  text: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput = ({
  name,
  text,
  changeHandler,
}: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        type="password"
        id={name}
        placeholder={text}
        onChange={changeHandler}
      />
    </>
  );
};

export default PasswordInput;
