export default function SubscribersNewPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Add Subscribers</h1>
        <p className="text-muted-foreground text-base mt-1 mb-4">
          Add new contacts to your audience. Import a list or add subscribers one by one.
        </p>
        <div className="rounded-xl bg-muted p-6 flex flex-col items-center justify-center">
          <span className="text-lg text-center">
            Subscriber import coming soon.
          </span>
          <button disabled className="mt-4 inline-block rounded-md bg-primary px-5 py-2 font-semibold text-white shadow-md opacity-50 cursor-not-allowed">
            Import Subscribers
          </button>
        </div>
      </div>
    </div>
  );
}