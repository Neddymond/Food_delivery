import { ConfigData } from './config.interface';

export const DEFAULT_CONFIG: ConfigData = {
  env: 'develop',
  db: {
    url: process.env.DATABASE_URL,
  },
  logLevel: 'info',
};
