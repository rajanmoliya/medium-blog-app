import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

//  not the ideal way (use monorepo instead)
import { signupInput, signinInput } from "../../../frontend/common/src/index";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({
      message: "invalid input",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    const name = body.name;

    return c.json({
      jwt: token,
      name,
    });
  } catch (e) {
    c.status(400);
    return c.json({
      message: "user exists / invalid credentials",
    });
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({
      message: "invalid input",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      error: "Invalid email or password",
    });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    jwt,
  });
});
