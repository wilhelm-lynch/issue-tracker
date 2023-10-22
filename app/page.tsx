import { Pagination } from "@/app/components";

export default function Home() {
  return <Pagination ItemsCount={100} pageSize={10} currentPage={10} />;
}
