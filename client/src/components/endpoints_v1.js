const API_VERSION = "1";

export const fetchNewsItems = fetch(
  `/v${API_VERSION}/newsitems`
).then((response) => response.json());
