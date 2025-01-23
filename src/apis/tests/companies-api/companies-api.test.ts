import { expect } from "@playwright/test";
import { test } from "../../../fixtures/fixture";
import { getCompanies } from "../../../resources/companies-api/companies.call";
import { companyResponseSchema } from "../../../resources/companies-api/companies.domain";

test("GET /Companies @Companies", async ({ request, settings }) => {
  const response = await getCompanies(request, settings);
  const companiesResponse = await response.json();
  expect(() => companyResponseSchema.parse(companiesResponse)).not.toThrow();
});
