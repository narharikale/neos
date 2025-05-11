import clsx from "clsx";

type Props = {
  content: string;
};

function CodePill(props: Props) {
  const { content } = props;

  return (
    <pre
      className={clsx(
        "px-1 rounded-md text-xs inline-flex items-center dark:text-blue-400 text-blue-500 dark:bg-[#388bfd1a] bg-[#388bfd1a]"
      )}
    >
      {content}
    </pre>
  );
}

export default CodePill;
