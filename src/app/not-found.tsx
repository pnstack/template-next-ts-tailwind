import AppLayout from '@/components/layouts/AppLayout';

export default function NotFound() {
  return (
    <AppLayout>
      <div className="flex h-full w-full items-center justify-center dark:bg-gray-700 dark:text-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Not Found</h2>
          <p>Could not find requested resource</p>
        </div>
      </div>
    </AppLayout>
  );
}