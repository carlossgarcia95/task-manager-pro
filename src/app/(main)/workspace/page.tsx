import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

type Props = {};

const WorkspacePage = async (props: Props) => {
  const authUser = auth();
  return (
    <div>
      WorkspacePage
      <UserButton />
      <p>{authUser.userId}</p>
    </div>
  );
};

export default WorkspacePage;
