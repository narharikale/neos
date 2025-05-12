import clsx from "clsx";

type Props = {
  icon: React.ReactElement;
  className: string;
};

function IconBadge(props: Props) {
  const { icon, className } = props;

  return (
    <div
      className={clsx("inline-flex items-center p-2 rounded-full", className)}
    >
      {icon}
    </div>
  );
}

export default IconBadge;
