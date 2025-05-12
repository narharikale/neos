import InfoButton from "../atoms/Button/InfoButton";

import data from "../../utils/prData.json";
import CodePill from "../atoms/Badge/Codepill";
import { CopyIcon, GitMergeIcon } from "@primer/octicons-react";

function PrTitle() {
  const { mergeInfo } = data.pullRequest;
  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-2">
        <p className="text-3xl font-regular dark:text-white">
          {data.pullRequest.title}
          <span className=" text-gray-400"> #{data.pullRequest.id}</span>
        </p>
        <InfoButton
          className="px-2 border rounded-md text-xs text-white bg-green-700 border-green-900 "
          children="New Issue"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="inline-flex text-sm items-center rounded-full py-1 px-3 bg-violet-600 text-white">
          <GitMergeIcon size={14} />
          <span className="ml-1">{data.pullRequest.status}</span>
        </div>
        <div className="flex item-center gap-1 text-sm dark:text-gray-400 text-gray-600">
          <span className="font-bold">{mergeInfo.user}</span>
          <span>{mergeInfo.action}</span>
          <CodePill content={mergeInfo.targetBranch} />
          <span>from</span>
          <CodePill content={mergeInfo.sourceBranch} />
          <button>
            <CopyIcon size={14} />
          </button>
          <span>{mergeInfo.timestamp}</span>
        </div>
      </div>
    </div>
  );
}

export default PrTitle;
