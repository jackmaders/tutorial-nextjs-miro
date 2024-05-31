import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4">
      <div className="">Authenticated User</div>
      <UserButton />
    </div>
  );
}
