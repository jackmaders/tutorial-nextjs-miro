import { UserButton } from "@clerk/nextjs";

function DashboardPage() {
  return (
    <div className="flex gap-4">
      <div className="">Authenticated User</div>
      <UserButton />
    </div>
  );
}

export default DashboardPage;
