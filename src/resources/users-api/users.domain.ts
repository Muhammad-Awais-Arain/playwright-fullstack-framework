import { z } from "zod";

const profileSchema = z.object({
  id: z.number(),
  name: z.string(),
  company: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.string(),
  zip: z.string(),
  state: z.string(),
  country: z.string(),
  phone: z.string(),
  photo: z.string().url(),
});

export const responseSchema = z.array(profileSchema);