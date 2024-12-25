"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useSession } from "next-auth/react";

export function SessionInfo() {
  const session = useSession();
  return (
    <Card className="mb-8 bg-white/5 backdrop-blur shadow-md">
      <CardBody className="p-5">
        [{JSON.stringify(session.data?.user)},
        {JSON.stringify(session.data?.expires)}]
      </CardBody>
    </Card>
  );
}
