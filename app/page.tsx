import IssueSummary from "@/app/IssueSummary";
import prisma from "@/prisma/client";
import IssueChart from "./issues/IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

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
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} closed={closed} inProgress={in_progress} />
        <IssueChart open={open} closed={closed} inProgress={in_progress} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
};

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};

export default Home;
