# IUCN Redlist API Wrapper

## Overview

The `iucn-redlist-api-wrapper` is a TypeScript package that provides a convenient interface for interacting with the IUCN Redlist API. This package allows you to fetch data about taxa, including details by SIS ID, scientific name, and more.

## Installation

To install the package, use npm:

```bash
npm install iucn-redlist-api-wrapper
```

## Usage

### Setup

First, import the IUCNredlist class from the package:

```typescript
import { IUCNredlist } from "iucn-redlist-api-wrapper";
```

Create an instance of the IUCNredlist class with your API token:

```typescript
const api = new IUCNredlist({ token: "YOUR_API_TOKEN" });
```

### Making Requests

You can use the taxa method to query various resources from the API. Below are some examples of how to use the package:

#### 1. Query by SIS ID

Fetch data using a SIS ID:

```typescript
const { taxon } = await api.get({
  resource: "taxa/sis",
  params: { sis_id: 172817975 },
});
```

#### 2. Query by Scientific Name

Fetch data using scientific names:

```typescript
const { taxon } = await api.get({
  resource: "taxa/scientific_name",
  params: {
    genus_name: "Aegis",
    species_name: "luteocontexta",
  },
});
```

#### 3. Fetch Kingdom Names

Retrieve a list of kingdom names:

```typescript
const { kingdom_names } = await api.get({
  resource: "taxa/kingdom",
});
```

#### 4. Query Kingdom by Name

Fetch data for a specific kingdom:

```typescript
const { assessments } = await api.get({
  resource: "taxa/kingdom",
  params: {
    kingdom_name: "ANIMALIA",
    page: 1,
    year_published: 2020,
  },
});
```

#### 5. Query Family by Name

Fetch data for a specific family:

```typescript
const { assessments } = await api.get({
  resource: "taxa/family",
  params: {
    family_name: "ACANTHACEAE",
    year_published: 2020,
  },
});
```

#### 6. Biogeographical Realms

Fetch Biogeographical Realms:

```typescript
const { biogeographical_realms } = await api.get({
  resource: "biogeographical_realms",
});
```

#### 7. Assessment by ID

Fetch Assessment by ID:

```typescript
const assessment = await api.get({
  resource: "assessment",
  params: {
    assessment_id: 172861292,
  },
});
```

## Output Formatting

The IUCN Redlist API allows you to customize the format of the response by using the `format` parameter. This can be particularly useful when you want to process or save the data in different formats. Below are the supported options:

### Format Options

#### 1. CSV
By setting the `format` parameter to `"CSV"`, the API response will be formatted as comma-separated values (CSV). This is useful when you intend to save the data directly to a CSV file for further processing or use in spreadsheet applications.

```typescript
const { biogeographical_realms } = await api.get({
  resource: "biogeographical_realms",
  format: "CSV"
});
```
In this example, the response will be pre-formatted as CSV, making it easy to save the data to a file.

#### 2. FLAT_JSON
he format parameter can also be set to "FLAT_JSON" to return the data in a flattened JSON structure. When using this option, all nested attributes will be concatenated using dots (.). This is helpful for simplifying nested data and using it in contexts where a flat structure is preferred.

```typescript
const { biogeographical_realms } = await api.get({
  resource: "biogeographical_realms",
  format: "FLAT_JSON"
});
```

In this case, any nested attributes in the response will be flattened, and their keys will be joined with a dot (.).

#### 3. JSON (Default)
If no format parameter is specified, the API response will default to a standard JSON structure. This is the default behavior and does not require explicit declaration. Nested attributes will be preserved in their original structure.

```typescript
const { biogeographical_realms } = await api.get({
  resource: "biogeographical_realms"
});
 // or
const { biogeographical_realms } = await api.get({
  resource: "biogeographical_realms",
  format: "JSON"
});
```
In this case, the response will be returned as a standard JSON object without any additional formatting, exactly as provided by the API.


## Resources and Parameters

All available resources and parameters for the IUCN Redlist API can be found in the official API documentation. For detailed information on how to use each endpoint and the parameters required, please refer to the following link:

[API Documentation](https://api.iucnredlist.org/api-docs/index.html)

## Important Notice

This package is not an official product of the International Union for Conservation of Nature (IUCN). It is an independent wrapper designed to simplify interactions with the IUCN Red List API.

Even though you are using this package, it is crucial to give proper acknowledgment and citation to the IUCN Red List API. When using the API or any data obtained from it, please ensure to cite it correctly as follows:

**Citation:** IUCN 2024. IUCN Red List of Threatened Species. Version 2024-1 <www.iucnredlist.org>.
