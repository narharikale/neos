import clsx from "clsx";

type Props = {
  url: string;
  imgClassName: string;
};

function Avatar(props: Props) {
  return (
    <div className="border dark:border-gray-700 border-gray-200 rounded-full w-fit h-fit mr-1">
      <img
        src={props.url}
        className={clsx(props.imgClassName, "rounded-full")}
        alt="image"
      />
    </div>
  );
}

export default Avatar;
