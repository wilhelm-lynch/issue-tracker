import { issueSchema } from "@/app/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import StatusCodes from "http-status-codes";
import prisma from "@/prisma/client";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();

  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.format() },
      { status: StatusCodes.BAD_REQUEST }
    );

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue)
    return NextResponse.json({
      error: "Invalid issue",
      status: StatusCodes.NOT_FOUND,
    });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
};
