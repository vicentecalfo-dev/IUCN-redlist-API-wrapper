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
import { IUCNredlist } from 'iucn-redlist-api-wrapper';
```
Create an instance of the IUCNredlist class with your API token:

```typescript
const api = new IUCNredlist({ token: 'YOUR_API_TOKEN' });
```

### Making Requests
You can use the taxa method to query various resources from the API. Below are some examples of how to use the package:

#### 1. Query by SIS ID
Fetch data using a SIS ID:

```typescript
const result = await api.taxa({
  resource: 'sis',
  params: { sis_id: 172817975 }
});
const { taxon } = await result.json();
```

#### 2. Query by Scientific Name
Fetch data using scientific names:

```typescript
const result = await api.taxa({
  resource: 'scientific_name',
  params: {
    genus_name: 'Aegis',
    species_name: 'luteocontexta'
  }
});
const { taxon } = await result.json();
```

#### 3. Fetch Kingdom Names
Retrieve a list of kingdom names:

```typescript
const result = await api.taxa({
  resource: 'kingdom'
});
const { kingdom_names } = await result.json();
```

#### 4. Query Kingdom by Name
Fetch data for a specific kingdom:

```typescript
const result = await api.taxa({
  resource: 'kingdom',
  params: {
    kingdom_name: 'ANIMALIA',
    page: 1,
    year_published: 2020
  }
});
const { assessments } = await result.json();
```

#### 5. Query Family by Name
Fetch data for a specific family:

```typescript
const result = await api.taxa({
  resource: 'family',
  params: {
    family_name: 'ACANTHACEAE',
    year_published: 2020
  }
});
const { assessments } = await result.json();
```

## Resources and Parameters

All available resources and parameters for the IUCN Redlist API can be found in the official API documentation. For detailed information on how to use each endpoint and the parameters required, please refer to the following link:

[API Documentation](https://api.iucnredlist.org/api-docs/index.html)

## Important Notice

This package is not an official product of the International Union for Conservation of Nature (IUCN). It is an independent wrapper designed to simplify interactions with the IUCN Red List API.

Even though you are using this package, it is crucial to give proper acknowledgment and citation to the IUCN Red List API. When using the API or any data obtained from it, please ensure to cite it correctly as follows:

**Citation:** IUCN 2024. IUCN Red List of Threatened Species. Version 2024-1 <www.iucnredlist.org>.



