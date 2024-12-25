"use client"

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useSession } from "next-auth/react";

export function SessionInfo() {
  const session = useSession();
  return (
    <Card className="mb-8 bg-white/10 backdrop-blur">
      <CardHeader>Current Session</CardHeader>
      <CardBody>{JSON.stringify(session.data?.user)}</CardBody>
    </Card>
  );
}
