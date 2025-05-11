import clsx from "clsx";

type Props = {
  content: string;
  className: string;
};

function Pill(props: Props) {
  const { content, className } = props;

  return (
    <span
      className={clsx(
        className,
        "inline-flex items-center rounded-full px-2 text-xs "
      )}
    >
      {content}
    </span>
  );
}

export default Pill;
