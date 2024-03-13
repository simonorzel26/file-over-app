# File over App


[![GitHub stars](https://img.shields.io/github/stars/simonorzel26/file-over-app.svg)](https://github.com/simonorzel26/file-over-app/stargazers)
[![GitHub license](https://img.shields.io/github/license/simonorzel26/file-over-app.svg)](https://github.com/simonorzel26/file-over-app/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/simonorzel26/file-over-app.svg)](https://github.com/simonorzel26/file-over-app/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/simonorzel26/file-over-app.svg)](https://github.com/simonorzel26/file-over-app/pulls)


![File Over App](https://i.imgur.com/xD5srDY.png)

## Overview

file-over-app embodies a philosophy prioritizing enduring digital artifacts over transient application experiences. In a digital era dominated by ephemeral software and fleeting data ownership, file-over-app stands as a beacon for longevity, readability, and user control. Inspired by the lasting impact of ancient hieroglyphs and the timeless nature of physical artifacts, file-over-app champions the creation of digital files in formats that are easily accessible, open, and free from the constraints of proprietary systems.

At its core, file-over-app leverages the Web API's client-side filesystem capabilities to empower web frontends with direct access to documents from the client's filesystem. This approach envisions a future where private user data resides solely on the user's local system, in formats such as .md and JSON Canvas. These formats ensure durability, interoperability, and user-friendly access, laying the groundwork for a digital legacy that transcends generations.

## Features

- **Client-Side File System Access**: Utilize the modern Web File System API to directly interact with files on the user's local system.
- **User Control and Ownership**: Give users unparalleled control over their data, enabling them to manage, store, and access their files without reliance on external cloud services.
- **Support for User-Friendly Formats**: Emphasize the use of .md (Markdown) and JSON Canvas formats, ensuring data is stored in open, easily retrievable formats.

## Getting Started

To integrate file-over-app into your project, ensure you have a modern web development environment ready. This package is designed for use in web applications capable of leveraging client-side JavaScript.

### Installation as npm package

```bash
pnpm install file-over-app
```

### Installation locally and build

```bash
git clone git@github.com:simonorzel26/file-over-app.git
pnpm install
pnpm build
```

### Usage

Import `file-over-app` into your project to start utilizing its functionalities:

```javascript
import { selectFile, verifyPermission, removeEntry } from 'file-over-app';

// Example: Selecting a file
async function handleFileSelection() {
    const fileHandle = await selectFile();
    console.log(fileHandle);
}

// Example: Verifying permission for file operation
async function handlePermissionVerification(fileHandle) {
    const hasPermission = await verifyPermission(fileHandle, true);
    console.log('Permission:', hasPermission);
}

// Example: Removing a file
async function handleFileRemoval(fileHandle) {
    await removeEntry(fileHandle);
    console.log('File removed');
}
```

### Current Functionalities

- **File Selection**: Prompt users to select files directly from their local filesystem.
- **Permission Verification**: Check and request permissions for read or write operations on the selected files.
- **File Removal**: Allow for the deletion of files with the user's consent.

### Current Limitations

- **User Permissions**: Due to security considerations, web applications must explicitly request access from the user for each file operation, potentially affecting user experience.
- **Browser Compatibility**: The underlying Web File System API has varying levels of support across browsers, which may limit functionality on unsupported platforms.

## Future Directions

As file-over-app evolves, we aim to expand its capabilities and improve upon its foundation, guided by the principle that the value of digital files should outlast the applications used to create them. We are committed to enhancing format support, streamlining user interactions, and ensuring that your digital artifacts can be a legacy for future generations.

## Contributing

We welcome contributions from the community. Whether it's improving the codebase, proposing new features, or reporting bugs, your input is invaluable in making file-over-app a robust tool for digital preservation. Please visit our GitHub repository at [file-over-app GitHub](https://github.com/simonorzel26/ts-npm-package-boilerplate) to contribute.

## License

file-over-app is open source, licensed under the MIT License. We believe in the freedom to use, modify, and distribute software, and we encourage you to join us in this endeavor to make digital data truly durable and user-controlled.