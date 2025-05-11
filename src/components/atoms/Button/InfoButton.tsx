import clsx from "clsx";

type Props = {
  children: React.ReactElement | string;
  className: string;
};

function InfoButton(props: Props) {
  const { children, className } = props;

  return (
    <button className={clsx(className, "flex items-center gap-2 px-3 py-1")}>
      {children}
    </button>
  );
}

export default InfoButton;
