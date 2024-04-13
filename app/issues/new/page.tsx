"use client";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: String;
  description: String;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root aria-placeholderer="Search the docs…">
        <TextField.Input placeholder="title" {...register("title")} />
        <TextField.Slot>
          <FaMagnifyingGlass height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>


      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
