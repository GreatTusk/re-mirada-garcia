import CartaBlog from "@/app/ui/blog/carta-blog";
import { posts } from "@/app/lib/data";

export default function Page() {
  return (
    <main>
      <CartaBlog blogs={posts} />
    </main>
  );
}
