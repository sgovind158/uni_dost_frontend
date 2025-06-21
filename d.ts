declare module "google-libphonenumber" {
  export class PhoneNumberUtil {
    static getInstance(): PhoneNumberUtil;
    parseAndKeepRawInput(phoneNumber: string, region?: string): unknown;
    isValidNumber(phoneNumber: unknown): boolean;
  }
}
