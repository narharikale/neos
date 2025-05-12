import { CheckIcon } from "@primer/octicons-react";
import Pill from "../atoms/Badge/Pill";

function SideDetails() {
  return (
    <aside className="w-full lg:w-1/4">
      <div className="py-4 border-b dark:border-gray-500 border-gray-200">
        <p className="text-xs dark:text-gray-400 text-gray-600 font-medium mb-2">
          Reviewers
        </p>
        <div className="flex flex-col gap-2">
          {reviewers.map((reviewer) => {
            return (
              <div
                key={reviewer.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={reviewer.avatar}
                    className="w-5 h-5 rounded-full mr-1 "
                    alt="image"
                  />
                  <p className="text-xs font-medium dark:text-white">
                    {reviewer.name}
                  </p>
                </div>

                <div className="justify-self-end">
                  {reviewer.approved ? (
                    <CheckIcon className="text-green-600" />
                  ) : (
                    <CheckIcon className="text-gray-400 " />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-4 border-b dark:border-gray-500 border-gray-200">
        <p className="text-xs dark:text-gray-400 text-gray-600 font-medium mb-2">
          Assignees
        </p>
        <p className="text-xs dark:text-gray-200">No one assigned</p>
      </div>
      <div className="py-4 border-b dark:border-gray-500 border-gray-200">
        <p className="text-xs dark:text-gray-400 text-gray-600 font-medium mb-2">
          Labels
        </p>
        <div>
          <Pill
            content="automerge"
            className="flex items-center bg-green-600 px-1.5 text-white"
          />
        </div>
      </div>
      <div className="py-4 border-b dark:border-gray-500 border-gray-200">
        <p className="text-xs dark:text-gray-400 text-gray-600 font-medium mb-2">
          Project
        </p>
        <p className="text-xs dark:text-gray-200">None yet</p>
      </div>
      <div className="py-4 border-b dark:border-gray-500 border-gray-200">
        <p className="text-xs dark:text-gray-400 text-gray-600 font-medium mb-2">
          Milestone
        </p>
        <p className="text-xs dark:text-gray-200">No milestone</p>
      </div>
      <div className="py-4 border-b dark:border-gray-500 border-gray-200">
        <p className="text-xs dark:text-gray-400 text-gray-600 font-medium mb-2">
          Development
        </p>
        <p className="text-xs dark:text-gray-200">
          Successfully merging this pull request may close these issues.
        </p>
        <p className="text-xs dark:text-gray-200">None yet</p>
      </div>
      <div className="py-4 border-b dark:border-gray-500 border-gray-200">
        <p className="text-xs dark:text-gray-400 text-gray-600 font-medium mb-2">
          {participants.length} participants
        </p>
        <div className="flex">
          {participants.map((participant, index) => {
            return (
              <div
                key={participant.avatarUrl + index}
                className="border dark:border-gray-700 border-gray-200 w-6.5 h-6.5 rounded-full mr-1"
              >
                <img
                  src={participant.avatarUrl}
                  className="w-6.5 h-6.5 rounded-full"
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

const reviewers = [
  {
    name: "shandcn",
    avatar: "https://avatars.githubusercontent.com/u/124599?s=40&v=4",
    approved: true,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/19780885?s=40&v=4",
    name: "Jacksonmills",
  },

  {
    name: "matevegh",
    avatar: "https://avatars.githubusercontent.com/u/30011773?s=40&v=4",
  },
];

const participants = [
  { avatarUrl: "https://avatars.githubusercontent.com/u/15782156?s=52&v=4" },
  { avatarUrl: "https://avatars.githubusercontent.com/u/124599?s=40&v=4" },
  { avatarUrl: "https://avatars.githubusercontent.com/u/19780885?s=40&v=4" },
  { avatarUrl: "https://avatars.githubusercontent.com/u/30011773?s=40&v=4" },
];

export default SideDetails;
