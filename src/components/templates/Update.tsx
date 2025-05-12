import data from "../../utils/prData.json";
import UserComment from "../molecules/CommentUpdate";
import ApproveEvent from "../molecules/Event/ApproveEvent";
import ChangeEvent from "../molecules/Event/ChangeEvent";
import CommitEvent from "../molecules/Event/CommitEvent";
import GenericEvent from "../molecules/Event/GenericEvent";
import PushEvent from "../molecules/Event/PushEvent";

function Update() {
  const { timeline } = data;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getUpdateComponent = (type: string, update: any) => {
    switch (type) {
      case "user_comment":
        return <UserComment data={update} type="user" />;
      case "bot_comment":
        return <UserComment data={update} type="bot" />;
      case "review_comment":
        return <UserComment data={update} type="review" />;
      case "commit_event":
        return <CommitEvent data={update} type="commit" />;
      case "change_event":
        return <ChangeEvent data={update} type="change" />;
      case "approve_event":
        return <ApproveEvent data={update} type="change" />;
      case "push_event":
        return <PushEvent data={update} type="change" />;
      case "deploy_event":
        return <GenericEvent data={update} type="deploy" />;
      case "tag_event":
        return <GenericEvent data={update} type="tag" />;
      case "merge_event":
        return <GenericEvent data={update} type="merge" />;
      default:
        break;
    }
  };

  return (
    <main className="flex-1">
      {timeline.map((update) => {
        return (
          <div key={update.id}>{getUpdateComponent(update.type, update)}</div>
        );
      })}
    </main>
  );
}

export default Update;
