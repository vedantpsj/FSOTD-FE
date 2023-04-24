export type USER = {
  id: number;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    postalCode?: number;
    countryCode?: string;
  };
};
