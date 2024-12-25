'use client'

import { Button } from "@nextui-org/button"
import { signIn, signOut } from "next-auth/react"

export function Actions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        color="primary"
        variant="shadow"
        size="md"
        className="w-full sm:w-auto"
        onClick={() => signIn()}
      >
        Log In
      </Button>
      <Button
        color="default"
        variant="shadow"
        size="md"
        className="w-full sm:w-auto"
        onClick={() => signOut({
          callbackUrl: "/auth/login/"
        })}
      >
        Sign Out
      </Button>
    </div>
  )
}
