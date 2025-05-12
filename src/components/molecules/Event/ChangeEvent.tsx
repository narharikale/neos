import { PencilIcon } from "@primer/octicons-react";
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
    <div className="w-full flex justify-between py-4 h-16">
      <div className="flex items-center text-sm gap-1.5">
        <IconBadge
          icon={<PencilIcon size={16} />}
          className="dark:bg-gray-800/50 dark:text-gray-400 bg-gray-100 text-gray-600"
        />
        <div className="inline-flex">
          <Avatar url={data?.user?.avatar} imgClassName="w-5 h-5" />
          <p className="font-medium ml-1 mr-1 dark:text-white">
            {data?.user?.name}{" "}
          </p>
          <p className="mr-1 dark:text-gray-400">{data?.action} </p>
          <div
            className="dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: data.body,
            }}
          />
          <p className="dark:text-gray-400"> {data?.timestamp}</p>
        </div>
      </div>
      <button className="text-xs hover:bg-gray-100 font-medium px-2 rounded-sm">
        {data.button?.content}
      </button>
    </div>
  );
}

export default ChangeEvent;
