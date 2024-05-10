import CartaBlog from "@/app/ui/blog/carta-blog";
import { posts } from "@/app/lib/data";
import Pagination from "@/app/ui/blog/paginacion";
import { Metadata } from "next";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main>
      <CartaBlog blogs={posts} />
      <Pagination totalPages={posts.length} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Blog",
};
