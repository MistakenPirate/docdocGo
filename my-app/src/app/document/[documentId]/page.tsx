import EditorBlock from "@/components/editor-block";
import { db } from "@/utils/db";
import React from "react";

interface SingleDocumentProps {
  documentId: string;
}
const SingelDocumentPage = async ({
  params,
}: {
  params: SingleDocumentProps;
}) => {
  const getDocument = await db.document.findUnique({
    where: {
      id: params.documentId,
    },
  });

  return (
    <div className="mt-6">
      <EditorBlock document={getDocument} />
    </div>
  );
};

export default SingelDocumentPage;
