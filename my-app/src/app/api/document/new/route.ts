import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("User not authenticated", { status: 401 });
    }
    const createNewDoc = await db.document.create({
      data: {
        userId: userId,
        title: "Untitled Document",
        description: "",
      },
    });
    revalidatePath("/");
    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error) {
    return new NextResponse("POST, new doc error", { status: 500 });
  }
}
