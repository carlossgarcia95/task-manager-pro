import React from "react";

type Props = {
  params: {
    workspaceId: string;
  };
};

const WorkspacePage = ({ params }: Props) => {
  return <div>Workspace with id: {params.workspaceId}</div>;
};

export default WorkspacePage;
