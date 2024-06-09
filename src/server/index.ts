import { Elysia, t } from "elysia";
import { PrismaClient } from "@prisma/client";
import { cors } from "@elysiajs/cors";

const prisma = new PrismaClient();

new Elysia()
  // Endpoint to get a car by its ID
  .get(
    "/cars/id/:id",
    ({ params: { id } }) => {
      const car = prisma.car.findUnique({
        where: {
          id: id,
        },
      });
      return car;
    },
    {
      params: t.Object({
        id: t.String(),
      }),
    }
  )
  // Endpoint to get all cars
  .get("/cars", () => {
    const cars = prisma.car.findMany();
    return cars;
  })
  .use(cors())

  .listen(3001);
