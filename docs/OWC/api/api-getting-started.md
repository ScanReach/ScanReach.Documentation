# ScanReach Generic API Docs

::: warning
Our Generic API solution is continuously evolving and we are working on adding more functionality. If you have any questions or feedback, please contact us at support@scanreach.com
:::

The ScanReach Generic API is a REST API that allows you to integrate your own systems with the ScanReach system.

Our API is **accessible both in cloud and onboard** each vessel. The API definition will be the same, just different URL endpoints.

## API definition

- REST API: [https://api.scanreach.com/swagger](https://api.scanreach.com/swagger/index.html).
  - Onboard: `https://<vessel-name>.edge.scanreach.com/swagger`
- GraphQL: [https://api.scanreach.com/graphql](https://api.scanreach.com/graphql).
  - Onboard: `https://<vessel-name>.edge.scanreach.com/graphql`
  - Note: you can not access sensordata through the GraphQL API.

## Authentication

Our API is protected by a simple API token that you soon can generate in the ConnectFleet frontend. Currently you need to contact us at support@scanreach.com in order to get an API token for your organization.

The API token must be added to every API request as a header `X-API-TOKEN`.

## Query for measurements

In order to query for measurements you must know the tags of the sensors you want to query for. You can either find the tags in the ConnectFleet frontend. Or through the API by first querying for dataSources:

```sh
curl -X 'GET' \
  'https://api.scanreach.com/api/v1/SensorData/dataSource' \
  -H 'accept: application/json' \
  -H 'X-API-TOKEN: {your token}'
```

You will then receive a list of dataSources like the following example:

```json
[
  {
    "tagName": "tag-name-1",
    "unit": "°C",
    "description": "",
    "decimals": null,
    "measurementType": "Temperature",
    "measurementDefinitionDescription": "Dry Bulb Temperature",
    "sensorTypeName": "RuuviTag With WBT",
    "siteName": "TODO: Implement",
    "siteId": "{your site id}"
  },
  {
    "tagName": "tag-name-2",
    "unit": "%",
    "description": "",
    "decimals": null,
    "measurementType": "Humidity",
    "measurementDefinitionDescription": "Humidity",
    "sensorTypeName": "RuuviTag With WBT",
    "siteName": "TODO: Implement",
    "siteId": "{your site id}"
  }
  // other data sources
]
```

Note the `tagName` of the sensors you want to query for. And use them in the following query which fetches average measurement per 10 minute last hour:

```sh
curl -X 'GET' \
  'https://api.scanreach.com/api/v1/SensorData/measurement?tags={tagName}&aggregationPeriod=00%3A10%3A00' \
  -H 'accept: application/json' \
  -H 'X-API-TOKEN: {your-api-token}'
```

And you will receive a list of measurements related to this tagName:

```json
[
  {
    "measurements": [
      {
        "timestamp": "2023-10-11T13:00:00Z",
        "value": 36.464117647058835
      },
      {
        "timestamp": "2023-10-11T13:10:00Z",
        "value": 36.46842857142857
      },
      {
        "timestamp": "2023-10-11T13:20:00Z",
        "value": 36.47985294117648
      },
      {
        "timestamp": "2023-10-11T13:30:00Z",
        "value": 36.490735294117655
      },
      {
        "timestamp": "2023-10-11T13:40:00Z",
        "value": 36.5077142857143
      },
      {
        "timestamp": "2023-10-11T13:50:00Z",
        "value": 36.51323529411765
      }
    ],
    "tagName": "{youTagName}",
    "unit": "{unit}",
    "description": "{description}",
    "decimals": 2,
    "measurementType": "{MeasurementType}",
    "measurementDefinitionDescription": "{Description}",
    "sensorTypeName": "{Some sensor name}",
    "siteName": "TODO: Implement",
    "siteId": "{your-site-id}"
  }
]
```
