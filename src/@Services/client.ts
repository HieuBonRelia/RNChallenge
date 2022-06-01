import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-dev.foodstyles.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzM1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0MDk3NzY4LCJleHAiOjE2NTQ3MDI1Njh9.A3_VpSaGVlpEqAMhJonqFAO49GiLCZVvxF-C-NnpaKGF0Zxl0lx6UKm8FgiRP0FmqW9u6xq8dfT5yeu7b7KGsWY2wEGTcn2Twr7ia1E_FInvRsppVkVPBOvUz8seRRfN1dxUYXnerg_cyn2C3Ix2bzGxjffYh13YhIQp68YdlJt4Cl2zlVHvj506gEARsob9L1fcOIZM85pVPnxrDGmTs2Vft6RvDKHSn7gYMmN-Ot4dVyb-ZzQjYFp1kcR8g703ZACAL3-ZKHuE2RRpUoxWtE-2ol4zTiZcsDFgkb0KI_3jd4zat7r77KZ4oU6YV8Lvo8OPhuRymReKA08YQIl-uA',
  },
});
