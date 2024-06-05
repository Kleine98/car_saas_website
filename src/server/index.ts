import { Elysia } from "elysia";
const { PrismaClient } = require("@prisma/client");
import { cors } from "@elysiajs/cors";

const prisma = new PrismaClient();

new Elysia()
  .get("/cars", async () => {
    const cars = await prisma.car.findMany();
    return cars;
  })
  .use(cors())
  .listen(3001);
