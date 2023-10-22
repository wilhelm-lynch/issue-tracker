import { Pagination } from "@/app/components";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      ItemsCount={100}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    />
  );
}
