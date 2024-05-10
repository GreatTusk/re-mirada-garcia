import Blog from "@/app/ui/blog/blog-pa";
import { posts, primerpost } from "@/app/lib/data";
import { Cartablog } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const blog: Cartablog | undefined = posts.find((post) => post.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <Blog blog={blog} />
    </div>
  );
}
