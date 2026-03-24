export default function CampaignsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Campaigns</h1>
        <div className="rounded-xl bg-muted p-6 flex flex-col items-center justify-center mt-3">
          <span className="text-lg text-center">
            You haven&apos;t created any campaigns. Start your first campaign now.
          </span>
          <a href="/dashboard/campaigns/new" className="mt-4 inline-block rounded-md bg-primary px-5 py-2 font-semibold text-white shadow-md hover:bg-primary/90 transition-all">
            New Campaign
          </a>
        </div>
      </div>
    </div>
  );
}