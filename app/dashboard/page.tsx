import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const firstName = user?.firstName || "there";

  // No dynamic greeting, MailPilot branding only!
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Welcome to MailPilot</h1>
        <p className="text-muted-foreground text-base mt-1 mb-4">
          Your command center for email campaigns.
        </p>
        <div className="rounded-xl bg-muted p-6 flex flex-col items-center justify-center">
          <span className="text-lg text-center">
            No campaign activity yet. Create a campaign to get started.
          </span>
          <a href="/dashboard/campaigns/new" className="mt-4 inline-block rounded-md bg-primary px-5 py-2 font-semibold text-white shadow-md hover:bg-primary/90 transition-all">
            New Campaign
          </a>
        </div>
      </div>
    </div>
  );
}