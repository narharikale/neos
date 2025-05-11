import clsx from "clsx";

import Pill from "../atoms/Badge/Pill";
import InfoButton from "../atoms/Button/InfoButton";
import {
  BellIcon,
  CodeIcon,
  CommentDiscussionIcon,
  GitPullRequestIcon,
  GraphIcon,
  HeartIcon,
  IssueOpenedIcon,
  PlayIcon,
  RepoForkedIcon,
  RepoIcon,
  ShieldIcon,
  StarIcon,
} from "@primer/octicons-react";

function RepoHeader() {
  return (
    <div className="h-full flex flex-col gap-1 dark:bg-[#0d1117] bg-slate-50">
      <Header />
      <Tabs />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-transparent px-8 my-4 flex justify-between">
      <div className="flex items-center gap-2">
        <RepoIcon size={16} className="dark:text-gray-400 text-gray-600 " />
        <p className="flex items-center gap-1">
          <a
            href="/"
            rel="noopener noreferrer"
            className="dark:text-blue-500 text-blue-600 text-xl "
          >
            shadcn-ui
          </a>
          <span className="dark:text-gray-400 text-gray-600">/</span>

          <a
            href="/"
            rel="noopener noreferrer"
            className="dark:text-blue-500 text-blue-600 text-xl "
          >
            ui
          </a>
        </p>
        <Pill
          content="Public"
          className="bg-transparent border-1 border-gray-300 dark:text-gray-400 text-gray-700 font-medium"
        />
      </div>

      <div className="flex gap-2 dark:text-zinc-100 text-gray-800">
        <InfoButton className="px-2 border rounded-md text-sm font-medium dark:border-gray-400 border-gray-300 dark:bg-zinc-800 bg-transparent">
          <>
            <HeartIcon className="text-pink-700" size={16} />
            <p>Sponsor</p>
          </>
        </InfoButton>

        <InfoButton className="px-2 border rounded-md text-sm font-medium dark:border-gray-400 border-gray-300 dark:bg-zinc-800 bg-transparent">
          <>
            <BellIcon className="dark:text-gray-400 text-gray-600" size={16} />
            <p>Notifications</p>
          </>
        </InfoButton>
        <InfoButton className="px-2 border rounded-md text-sm font-medium dark:border-gray-400 border-gray-300 dark:bg-zinc-800 bg-transparent">
          <>
            <RepoForkedIcon
              className="dark:text-gray-400 text-gray-600"
              size={16}
            />
            <p>Fork</p>
            <Pill content="5.9k" className="dark:bg-zinc-700/50 bg-gray-200" />
          </>
        </InfoButton>
        <InfoButton className="px-2 border rounded-md text-sm font-medium  dark:border-gray-400 border-gray-300 dark:bg-zinc-800 bg-transparent">
          <>
            <StarIcon className="dark:text-gray-400 text-gray-600" size={16} />
            <p>Star</p>
            <Pill content="86.7k" className="dark:bg-zinc-700/50 bg-gray-200" />
          </>
        </InfoButton>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <nav className="bg-transparent border-b-1 dark:border-gray-700 border-gray-200">
      <ul className="flex gap-2 list-none px-8">
        {navData.map((tab) => {
          return (
            <li
              className={clsx(
                "pb-2",
                tab.active ? "border-b-3 border-[#fd8c73]" : ""
              )}
            >
              <div className="flex gap-2 px-2 rounded-md text-base/8 items-center | text-[#0d1117] dark:text-zinc-100 hover:bg-[#818b981a] dark:hover:bg-[#212830]">
                <span>{tab.icon}</span>
                <p>{tab.name}</p>
                <span>{tab.data}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const navData = [
  {
    name: "Code",
    icon: <CodeIcon className="text-gray-500" size={16} />,
  },
  {
    name: "Issues",
    icon: <IssueOpenedIcon className="text-gray-500" />,
    data: "971",
  },
  {
    name: "Pull requests",
    icon: <GitPullRequestIcon className="text-gray-500" />,
    data: "799",
    active: true,
  },
  {
    name: "Discussions",
    icon: <CommentDiscussionIcon className="text-gray-500" />,
  },
  {
    name: "Actions",
    icon: <PlayIcon className="text-gray-500" />,
  },
  {
    name: "Security",
    icon: <ShieldIcon className="text-gray-500" />,
  },
  {
    name: "Insights",
    icon: <GraphIcon className="text-gray-500" />,
  },
];

export default RepoHeader;
