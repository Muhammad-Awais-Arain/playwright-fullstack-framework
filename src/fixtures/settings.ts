export class settings {
    env = process.env.ENV as string;
    baseUrl = process.env.BASE_URL as string;
    demoUrl = process.env.DEMO_URL as string;
    calculatorUrl = process.env.CALCULATOR_URL as string;
}