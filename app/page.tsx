import IssueSummary from "@/app/IssueSummary";
import prisma from "@/prisma/client";
import IssueChart from "./issues/IssueChart";

const Home = async () => {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const in_progress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return <IssueChart open={open} closed={closed} inProgress={in_progress} />;
};

export default Home;
