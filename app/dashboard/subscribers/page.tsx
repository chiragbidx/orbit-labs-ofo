export default function SubscribersPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Subscribers</h1>
        <div className="rounded-xl bg-muted p-6 flex flex-col items-center justify-center mt-3">
          <span className="text-lg text-center">
            No subscribers yet. Add subscribers to start building your audience.
          </span>
          <a href="/dashboard/subscribers/new" className="mt-4 inline-block rounded-md bg-primary px-5 py-2 font-semibold text-white shadow-md hover:bg-primary/90 transition-all">
            Add Subscribers
          </a>
        </div>
      </div>
    </div>
  );
}