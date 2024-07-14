import { auth } from "@clerk/nextjs/server";
import React from "react";
import IntroPage from "./intropage";

const Dashboard = () => {
  const { userId } = auth();
  if(!userId){
    return <IntroPage/>
  }
  return (
    <div>
      {/* new docs*/}
      {/* recent docs */}
    </div>
  );
};

export default Dashboard;
