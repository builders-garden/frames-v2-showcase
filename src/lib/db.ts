import { usersTable } from "@/schemas/db.schema";
import { createClient } from "@libsql/client";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";
import { DbUser } from "./types";
import { env } from "./env";

if (!env.TURSO_DATABASE_URL) {
  throw new Error("Missing TURSO_DATABASE_URL environment variable");
}

if (!env.TURSO_AUTH_TOKEN) {
  throw new Error("Missing TURSO_AUTH_TOKEN environment variable");
}

export const tursoClient = createClient({
  url: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(tursoClient, {
  schema: {
    usersTable,
  },
});

export const createUser = async (_user: { fid: number; token: string }) => {
  const user = await db
    .insert(usersTable)
    .values(_user)
    .onConflictDoUpdate({
      target: usersTable.fid,
      set: {
        token: _user.token,
        updatedAt: new Date().toUTCString(),
      },
    })
    .returning();
  return user;
};

export const getUserByFid = async (fid: number) => {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.fid, fid),
  });
  return user;
};

export const updateUserByFid = async (fid: number, _user: Partial<DbUser>) => {
  return await db
    .update(usersTable)
    .set({
      ..._user,
      updatedAt: new Date().toUTCString(),
    })
    .where(eq(usersTable.fid, fid))
    .returning();
};

export const deleteUserByFid = async (fid: number) => {
  return await db.delete(usersTable).where(eq(usersTable.fid, fid)).returning();
};
