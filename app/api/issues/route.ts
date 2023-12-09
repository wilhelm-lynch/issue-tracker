import prisma from "@/prisma/client";
import status from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../../validationSchemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export const POST = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: status.UNAUTHORIZED });

  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: status.BAD_REQUEST,
    });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: status.CREATED });
};
