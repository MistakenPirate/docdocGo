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

const DrawerAI = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="flex float-right">  
            <Button variant={"outline"}>Ask your wizard 🧞</Button>
                 </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Hi there, with my magic spell, I`&apos;`ll help you tell your story. AbraCadabraAllakazum</DrawerTitle>
                <DrawerDescription>This acton can not be</DrawerDescription>
            </DrawerHeader> 
          </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerAI;
