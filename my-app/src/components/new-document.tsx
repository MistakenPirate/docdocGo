"use client";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Plus } from "lucide-react";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

export const NewDocument = () => {
  const router = useRouter();
  const { toast } = useToast();
  const createNewDoc = async () => {
    try {
      const res = await axios.post("/api/document/new");
      toast({
        title: "Document Successfully Created",
      });
      router.push(`/document/${res.data.id}`);
    } catch (e) {}
  };
  const TemplateMap = [
    {
      component: (
        <button onClick={() => createNewDoc()}>
          <Card className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer">
            <CardHeader />
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} />
            </CardContent>
            <CardFooter />
          </Card>
        </button>
      ),
      footer: "Blank Document",
    },
  ];
  return (
    <div className="bg-gray-50 h-[300px] flex flex-row md:flex-col justify-center flex-wrap">
      <div className="flex flex-col space-y-4 w-10/12 mx-auto flex-wrap">
        <h3 className="text-muted-foreground text-sm">Start a new document</h3>
        <div>
          {TemplateMap.map((template) => (
            <div key={template.footer}>
              {template.component}
              <p className="text-sm mt-2 ml-2">{template.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
