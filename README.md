# @rewiringamerica/capital-common

This package provides shared TypeScript types and possibly utilities for Financial Programs.

## Installation

Run the following command to install the package:

```bash
yarn add @rewiringamerica/capital-common
```

## Usage

Import the types using this pattern:

```typescript
import {
  LoanProgram,
  FinancialAuthority,
} from "@rewiringamerica/capital-common";
```

## Development

### Scripts

- **Build the package**:
  To build the package, run:

  ```bash
  yarn build
  ```

  This will compile the TypeScript files and generate the distribution files.

## Publishing

A GitHub Action will automatically publish the package when a new Release is created.
