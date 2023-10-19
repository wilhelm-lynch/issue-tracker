"use client";
import { Issue, User } from ".prisma/client";
import { Skeleton } from "@/app/components";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ms from "ms";
import { useState } from "react";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const [value, setValue] = useState("");
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: ms("60s"),
    retry: 3,
  });

  if (isLoading) return <Skeleton />;

  if (error) return null;

  const onSelectValueChange = (Id: string) => {
    axios.patch("/api/issues/" + issue.id, {
      assignedToUserId: Id === "unassigned" ? null : Id,
    });
  };

  return (
    <Select.Root
      defaultValue={issue.assignedToUserId || "unassigned"}
      onValueChange={(userId) => {
        onSelectValueChange(userId);
      }}
    >
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="unassigned">Unassigned</Select.Item>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
