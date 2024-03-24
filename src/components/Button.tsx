interface ButtonProp {
  title: string | JSX.Element;
  className?: string
}
export const Button = ({ title, className }: ButtonProp) => {
  return (
    <button className={`rounded-md ${className}`}>{title}</button>
  );
};
