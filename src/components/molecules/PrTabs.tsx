import Pill from "../atoms/Badge/Pill";
import clsx from "clsx";
import {
  ChecklistIcon,
  CommentDiscussionIcon,
  FileDiffIcon,
  GitCommitIcon,
} from "@primer/octicons-react";

function PrTabs() {
  return (
    <div className="w-full border-b text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-500 flex items-center justify-between">
      <ol className="list-none flex gap-2">
        {tabs.map((tab) => {
          return (
            <li
              className={clsx(
                "flex text-sm items-center gap-1 px-4 py-2 rounded-t-md ",
                tab.active
                  ? "mb-[-1px] border border-b-0 border-gray-300 dark:border-gray-500 dark:bg-[#0d1117] bg-white"
                  : ""
              )}
            >
              {tab.icon}
              <p>{tab.content}</p>
              <Pill
                content={tab.postfix}
                className="dark:bg-gray-700/50 dark:text-gray-400 bg-gray-200"
              />
            </li>
          );
        })}
      </ol>

      <div className="text-xs">
        <span className="text-green-700">+ 1 </span>
        <span className="text-red-700 mr-1">−1 </span>
        <span>
          <span className="inline-block w-2 h-2 ml-[1px] bg-red-700" />
          <span className="inline-block w-2 h-2 ml-[1px] bg-green-700" />
          <span className="inline-block w-2 h-2 ml-[1px] border dark:bg-gray-800 bg-gray-200 dark:border-gray-600 border-gray-300" />
          <span className="inline-block w-2 h-2 ml-[1px] border dark:bg-gray-800 bg-gray-200 dark:border-gray-600 border-gray-300" />
          <span className="inline-block w-2 h-2 ml-[1px] border dark:bg-gray-800 bg-gray-200 dark:border-gray-600 border-gray-300" />
        </span>
      </div>
    </div>
  );
}

const tabs = [
  {
    icon: <CommentDiscussionIcon size={16} />,
    content: "Conversation",
    postfix: "3",
    active: true,
  },
  {
    icon: <GitCommitIcon className="text-gray-500" size={16} />,
    content: "Commits",
    postfix: "1",
  },
  {
    icon: <ChecklistIcon className="text-gray-500" size={16} />,
    content: "Checks",
    postfix: "5",
  },
  {
    icon: <FileDiffIcon className="text-gray-500" size={16} />,
    content: "Files changed",
    postfix: "1",
  },
];

export default PrTabs;
