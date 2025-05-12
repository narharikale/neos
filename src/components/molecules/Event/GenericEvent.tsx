import { GitMergeIcon, RocketIcon, TagIcon } from "@primer/octicons-react";
import IconBadge from "../../atoms/Badge/IconBadge";
import Avatar from "../../atoms/Avatar";
import Pill from "../../atoms/Badge/Pill";
import CodePill from "../../atoms/Badge/Codepill";

type Data = {
  type: string;
  user: {
    name: string;
    avatar: string;
    tag: string;
  };
  action: string;
  commitId?: string;
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

function GenericEvent(props: Props) {
  const { data, type } = props;

  return (
    <div className="w-full flex justify-between py-4 h-16">
      <div className="flex items-center text-sm gap-1.5">
        {type === "deploy" && (
          <IconBadge
            icon={<RocketIcon />}
            className="bg-gray-100 text-gray-600"
          />
        )}

        {type === "merge" && (
          <IconBadge
            icon={<GitMergeIcon />}
            className="bg-purple-500 text-white"
          />
        )}
        {type === "tag" && (
          <IconBadge icon={<TagIcon />} className="bg-gray-100 text-gray-600" />
        )}
        <div className="inline-flex">
          <Avatar url={data?.user?.avatar} imgClassName="w-5 h-5" />
          <p className="font-medium ml-1 mr-1 dark:text-white">
            {data?.user?.name}{" "}
          </p>
          {data.user.tag ? (
            <Pill
              className="dark:transparent dark:text-gray-500 dark:border-gray-500 border-gray-300 border text-xs text-gray-700 font-medium px-0 ml-1"
              content={data.user.tag}
            />
          ) : null}
          <p className="mr-1 flex items-center dark:text-gray-400">
            {data?.action}{" "}
          </p>
          {type === "deploy" && (
            <span className="dark:text-white text-gray-950">{data.body}</span>
          )}

          {type === "tag" && (
            <Pill
              className="dark:transparent  bg-green-700 border text-xs text-white font-medium px-0 ml-1"
              content={data.body}
            />
          )}
          {type === "merge" && (
            <div className="flex items-center">
              <code className="text-xs mr-1 dark:text-gray-400">
                {data.commitId}
              </code>
              <CodePill content="shadcn-ui:main" />
            </div>
          )}
          <p className="ml-1 dark:text-gray-400"> {data?.timestamp}</p>
        </div>
      </div>
      {data.button?.content ? (
        <button className="h-7 text-xs dark:bg-gray-700/50 dark:text-white dark:border-gray-400 bg-gray-100 border border-gray-200 px-2 py-1 font-medium rounded-sm">
          {data.button?.content}
        </button>
      ) : null}
    </div>
  );
}

export default GenericEvent;
