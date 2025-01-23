import { z } from 'zod';

const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  zip: z.string(),
  country: z.string(),
  employeeCount: z.number(),
  industry: z.string(),
  marketCap: z.number(),
  domain: z.string(),
  logo: z.string().url(),
  ceoName: z.string(),
});

export const companyResponseSchema = z.array(companySchema);