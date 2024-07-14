import { auth } from "@clerk/nextjs/server";
import React from "react";
import IntroPage from "./intro-page";
import { NewDocument } from "./new-document";

const Dashboard = () => {
  const { userId } = auth();
  if(!userId){
    return <IntroPage/>
  }
  return (
    <div>
      {/* new docs*/}
      <NewDocument/>
      {/* recent docs */}
    </div>
  );
};

export default Dashboard;
