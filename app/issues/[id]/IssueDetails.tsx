import { Issue } from ".prisma/client";
import { IssueStatusBadge } from "@/app/components";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <Fragment>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="6">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Fragment>
  );
};

export default IssueDetails;
