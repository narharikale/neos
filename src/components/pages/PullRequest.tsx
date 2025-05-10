import { Header, MobileHeader } from "../templates/Header";

function PullRequest() {
  return (
    <>
      <div className="hidden xl:block">
        <Header />
      </div>
      <div className="block xl:hidden">
        <MobileHeader />
      </div>
    </>
  );
}

export default PullRequest;
