import { CheckIcon } from "@primer/octicons-react";
import IconBadge from "../../atoms/Badge/IconBadge";
import Avatar from "../../atoms/Avatar";

type Data = {
  type: string;
  isReviewComment: boolean;
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

function ApproveEvent(props: Props) {
  const { data } = props;

  return (
    <div className="w-full h-16 py-4">
      <div className="flex justify-between items-center relative">
        <div className="flex items-center text-sm gap-1.5">
          {data.isReviewComment ? (
            <IconBadge
              icon={<CheckIcon size={16} />}
              className="bg-green-600 text-white"
            />
          ) : (
            <IconBadge
              icon={<CheckIcon size={16} />}
              className="dark:bg-gray-800/50 dark:text-gray-400 bg-gray-100 text-gray-600"
            />
          )}
          <p>
            <span className="font-medium mr-1 dark:text-white">
              {data.user.name}
            </span>
            <span className="mr-1 dark:text-gray-400">{data.action}</span>
            <span className="dark:text-gray-400">{data.timestamp}</span>
          </p>
        </div>
        <button className="text-xs hover:bg-gray-100 font-medium px-2 rounded-sm dark:text-white">
          {data.button?.content}
        </button>

        <a href="" className="absolute -left-16 top-0">
          <Avatar url={data.user.avatar} imgClassName="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default ApproveEvent;
