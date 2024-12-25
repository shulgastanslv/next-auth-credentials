"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useSession } from "next-auth/react";

export function SessionInfo() {
  const session = useSession();
  
  return (
    <Card className="m-5 bg-white/5 backdrop-blur shadow-md">
      <CardBody className="p-5">
        <div className="space-y-2">
          {JSON.stringify(session)}
        </div>
      </CardBody>
    </Card>
  );
}
