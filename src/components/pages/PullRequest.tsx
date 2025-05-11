import { Header, MobileHeader } from "../templates/Header";
import RepoHeader from "../templates/RepoDetails";
import Timeline from "../templates/Timeline";

function PullRequest() {
  return (
    <main className="bg-white dark:bg-[#0d1117]">
      <div className="hidden xl:block">
        <Header />
      </div>
      <div className="block xl:hidden">
        <MobileHeader />
      </div>
      <RepoHeader />
      <Timeline />
    </main>
  );
}

export default PullRequest;
