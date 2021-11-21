import { ApiConfig } from "../../common/types/api";
import { fetchApi } from "../utils/fetchApi";

class Config {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  fetch: fetchApi,
});

export const getConfig = () => {
  return configWrapper.getConfig();
};
