"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
// import { openAI } from "@/utils/open-ai";
import { Loader } from "lucide-react";

interface DrawerProps {
  description: string | null;
}

const DrawerAI  = ({description}: DrawerProps) => {
  const [open, setOpen] = useState(false);
  // const [wizardSuggestion, setWizardSuggestion] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const handleWizardSuggestion = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = (await openAI(description!)) as string;
  //     setWizardSuggestion(response);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(wizardSuggestion);
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="flex float-right">
          {/* <Button variant={"outline"} onClick={handleWizardSuggestion}>
            Ask your wizard 🧞
          </Button> */}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              Hi there, with my magic spell, I&apos;`ll help you tell your
              story. AbraCadabraAllakazum
            </DrawerTitle>
            {/* {isLoading ? (
              <Loader className="flex mx-auto justify-center animate-spin" />
            ) : (
              <DrawerDescription className="whitespace-pre-wrap">
                {wizardSuggestion.length > 0 && <p>{wizardSuggestion}</p>}
              </DrawerDescription>
            )} */}
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerAI;
