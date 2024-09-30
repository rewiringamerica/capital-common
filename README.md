# @rewiringamerica/capital-common

This package provides shared TypeScript types and possibly utilities for Financial Programs.

## Installation

To install this package from GitHub Packages, you will need to authenticate using a GitHub Personal Access Token (PAT) with the `read:packages` scope.

### Step-by-Step Installation Instructions:

1. **Create a Personal Access Token (PAT)** with the `read:packages` permission. You can generate a new token from your [GitHub settings](https://github.com/settings/tokens).

2. **Add the Personal Access Token to Your Environment**:
   Add the following line to your `.env` file (located in the root of your project; do not put quotes around the value):

   ```
   GITHUB_TOKEN=your_personal_access_token
   ```

3. **Install the Package**:
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

- **Prepare for Publishing**:

  The prepare script automatically runs the build process before publishing or installing the package from Git.

  ```bash
  yarn prepare
  ```

## Publishing

A GitHub Action will automatically publish the package when a new Release is created.
