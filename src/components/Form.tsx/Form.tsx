type FormProps = {
  children: React.ReactNode;
  submitHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ children }: FormProps): JSX.Element => {
  return <form>{children}</form>;
};

export default Form;
