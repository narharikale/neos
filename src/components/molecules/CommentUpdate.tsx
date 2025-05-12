import { KebabHorizontalIcon } from "@primer/octicons-react";
import Pill from "../atoms/Badge/Pill";
import Avatar from "../atoms/Avatar";

type Data = {
  type: string;
  user: {
    name: string;
    avatar: string;
    tag: string;
  };
  isReviewComment: boolean;
  timestamp: string;
  role: string;
  body: string;
  reactions: string[];
};

type Props = {
  type: string;
  data: Data;
};

function UserComment(props: Props) {
  const { data } = props;

  return (
    <div className="w-full border rounded-md dark:border-gray-500 border-gray-200 mb-4 mt-4 relative">
      <div className="flex items-center justify-between py-2 px-4 text-sm rounded-t-md gap-2 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800/50 bg-slate-50">
        <p>
          <span className="font-medium dark:text-white">{data.user.name}</span>
          {data.user.tag ? (
            <Pill
              className="dark:transparent dark:text-gray-500 dark:border-gray-500 border-gray-300 border text-xs text-gray-700 font-medium px-0 ml-1"
              content={data.user.tag}
            />
          ) : null}
          <span className="ml-1 text-gray-600 dark:text-gray-400">
            {data.timestamp}
          </span>
        </p>
        <div className="flex items-center gap-2">
          {data.role ? (
            <Pill
              className="font-medium px-0 dark:text-gray-500 dark:border-gray-500 border-gray-300 border text-xs text-gray-700"
              content={data.role}
            />
          ) : (
            ""
          )}
          <KebabHorizontalIcon className="dark:text-gray-400" size={16} />
        </div>
      </div>
      <div className="p-4 text-sm dark:text-white">
        <p>{data.body}</p>
      </div>
      {data.isReviewComment ? null : (
        <a href="" className="absolute -left-16 top-0">
          <Avatar url={data.user.avatar} imgClassName="w-10 h-10" />
        </a>
      )}
    </div>
  );
}

export default UserComment;
