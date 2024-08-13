import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { BookText } from "lucide-react";

export const RecentDocument = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const userDocuments = await db.document.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  console.log(userDocuments)

  return (
    <div className="w-10/12 mx-auto my-4">
      <h1 className="font-semibold text-sm mb-4">RecentDocument</h1>
      <div className="flex gap-8 flex-wrap">
        {userDocuments.length > 0 ? (
          userDocuments.map((doc) => (
            <div key={doc.id} className="w-[150px]">
              <Link href={`document/${doc.id}`}>
                <Card className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer">
                  <CardHeader />
                  <CardContent className="flex justify-center mx-auto">
                    <BookText size={60} />
                  </CardContent>
                  <CardFooter />
                </Card>
              </Link>
              <p className="text-sm mt-2">{doc.title}</p>
            </div>
          ))
        ) : (
          <p>Once you start writing your recent documents will go here...</p>
        )}
      </div>
    </div>
  );
};
