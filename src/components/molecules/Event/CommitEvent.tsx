import { CheckIcon, GitCommitIcon } from "@primer/octicons-react";
import IconBadge from "../../atoms/Badge/IconBadge";
import Avatar from "../../atoms/Avatar";

type Data = {
  type: string;
  user: {
    name: string;
    avatar: string;
    tag: string;
  };
  action: string;
  timestamp: string;
  role: string;
  body: string;
  reactions: string[];
  button: {
    type: "text";
    content: "View reviewed changes";
  };
};

type Props = {
  type: string;
  data: Data;
};

function ChangeEvent(props: Props) {
  const { data } = props;

  return (
    <div className="w-full flex justify-between h-16">
      <div className="flex items-center text-xs gap-1.5">
        <IconBadge
          icon={<GitCommitIcon size={16} />}
          className="bg-transparent dark:text-gray-400 text-gray-600"
        />
        <div className="inline-flex">
          <Avatar url={data?.user?.avatar} imgClassName="w-5 h-5" />
          <div
            className="ml-1 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: data.body,
            }}
          />
        </div>
      </div>
      <a className="text-xs font-medium px-2 rounded-sm flex items-center dark:text-gray-400">
        <CheckIcon className="text-green-700 mr-1" size={14} />
        <pre className="text-gray-500">{data.button.content}</pre>
      </a>
    </div>
  );
}

export default ChangeEvent;
