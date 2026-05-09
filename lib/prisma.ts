import {  PrismaClient } from "@prisma/client/extension";
import { globals } from "./Globals";

// Use a global variable to store the prisma instance in development
// so it is not re-created every time the file is re-loaded (Hot Reloading).

export const PRISMA:PrismaClient = globals.server.prisma as PrismaClient || new PrismaClient({log:["Creates a prismaClient object."]});

if(process.env.NODE_ENV !== "production") globals.server.prisma = PRISMA;