/**
 * Configuration for the database connection.
 */
export interface ConfigDBData {
  url?: string;
}

export interface ConfigData {
  env: string;
  db: ConfigDBData;
  logLevel: string;
}
