

# TS NPM Package Boilerplate (2024)

This TypeScript NPM package boilerplate is designed to kickstart the development of TypeScript libraries for Node.js and the browser. It features a modern build setup with TypeScript, leveraging `tsup` for bundling and `@changesets/cli` for version management. The package exports a simple function as an example to demonstrate the setup.

## Features

- TypeScript for type safety.
- Dual package output (CommonJS and ESM) for compatibility.
- Type definitions for TypeScript projects.
- Automated build and release scripts.

## Prerequisites

- Node.js v19.8.1
- `pnpm` (Follow [pnpm installation guide](https://pnpm.io/installation) if you haven't installed it)

## Installation

To use this boilerplate for your project, clone the repository and install the dependencies.

```bash
git clone https://github.com/simonorzel26/ts-npm-package-boilerplate your-package-name
cd your-package-name
pnpm install
```

## Usage

After installation, you can start using the boilerplate to build your TypeScript library. Here's how to import and use the example function exported by this package:

```typescript
import { foo } from 'your-package-name';

console.log(foo('Hello, world!'));
```

## Development

This package includes several scripts to help with development:

- `pnpm run build`: Compiles the TypeScript source code and generates both CommonJS and ESM modules along with type definitions.
- `pnpm run lint`: Runs TypeScript compiler checks without emitting code to ensure type safety.
- `pnpm run release`: Bundles the package and publishes it to NPM with version management.

### Adding New Functions

To add a new function, create a `.ts` file in the `src` directory. For example:

```typescript
// src/newFunction.ts
export const newFunction = (): void => {
  // Implementation here
};
```

Then, export it from `index.ts`:

```typescript
// index.ts
export * from './newFunction';
```

## Contributing

Contributions are welcome! Please submit a pull request or create an issue for any features, bug fixes, or improvements.

## License

This project is open-sourced under the MIT License. See the [LICENSE](https://github.com/simonorzel26/ts-npm-package-boilerplate/blob/main/LICENSE) file for more details.

## Author

Simon Orzel

---

For more details and documentation, please visit the [project homepage](https://github.com/simonorzel26/ts-npm-package-boilerplate).
