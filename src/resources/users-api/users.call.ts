import { APIRequestContext, APIResponse, expect } from "@playwright/test";
import { settings } from "../../fixtures/settings";

export async function getUsers(
  request: APIRequestContext,
  settings: settings,
  expectedStatusCode?: number
) {
  const url = `${settings.baseUrl}/users`;
  const response: APIResponse = await request.get(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (expectedStatusCode) {
    expect
      .soft(
        response.status(),
        `Status code does not match ${expectedStatusCode}`
      )
      .toBe(expectedStatusCode);
  } else {
    expect(response.status()).toBe(200);
  }
  return response;
}