"use client";

import SimpleMDE from "react-simplemde-editor";
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="Title"></TextField.Input>
      </TextField.Root>
      <SimpleMDE placeholder="Description"></SimpleMDE>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
