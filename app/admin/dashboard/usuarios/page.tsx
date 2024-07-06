import { clerkClient } from "@clerk/nextjs/server";
import UsuariosCards from "@/app/ui/admin/user-control/users-cards";
import { fetchAllUsersIds } from "@/app/admin/lib/db";

export type ClerkUser = {
  id: string;
  imageUrl: string;
  hasImage: boolean;
  fullName: string | null;
  emailAddress: string | undefined;
  role: string;
};

export default async function AdminDashboard() {
  const userIds = await fetchAllUsersIds();
  const users: ClerkUser[] = await Promise.all(
    userIds.map(async (id: string) => {
      const userData = await clerkClient.users.getUser(id);
      return {
        id: userData.id,
        imageUrl: userData.imageUrl,
        hasImage: userData.hasImage,
        fullName: userData.fullName,
        emailAddress: userData.emailAddresses.find(
          (email) => email.id === userData.primaryEmailAddressId,
        )?.emailAddress,
        role: userData.publicMetadata.role as string,
      };
    }),
  );
  return <UsuariosCards usuarios={users} />;
}

export const dynamic = "force-dynamic";
