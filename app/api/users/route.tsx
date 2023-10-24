import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const user = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(user);
};
