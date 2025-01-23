import { expect } from "@playwright/test";
import { test } from "../../../fixtures/fixture";
import { getUsers } from "../../../resources/users-api/users.call";
import { responseSchema } from "../../../resources/users-api/users.domain";

test("GET /Users @users", async ({ request, settings }) => {
  const response = await getUsers(request, settings);
  const usersResponse = await response.json();
  expect(() => responseSchema.parse(usersResponse)).not.toThrow();
});
