import { Account, Client, Databases } from "node-appwrite";
import { cookies } from "next/headers";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

export const createAdminClient = async () => {
  const database = new Databases(
    client.setKey(process.env.APPWRITE_SECRET!)
  );
  const account = new Account(client);

  return {
    database,
    account,
    user: account,
  };
};

export const createSessionClient = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("appwrite-session")?.value;

  if (!session) throw new Error("No session found");

  const database = new Databases(
    client.setJWT(session)
  );
  const account = new Account(client);

  return {
    database,
    account,
  };
}; 