# linkchrome

**LinkChrome** is a browser extension built using React, TypeScript, and Tailwind CSS, supporting both Chrome and Firefox. It leverages `wxt`, a tool for building browser extensions, to streamline development and deployment.

This README provides setup instructions, available commands, and an overview of how to use the extension. It also includes details on embedding videos to demonstrate features.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Development Commands](#development-commands)
4. [Build Commands](#build-commands)
5. [How to Use LinkChrome](#how-to-use-linkchrome)
6. [Embedding Videos](#embedding-videos)
7. [Contributing](#contributing)

## Features

- Multi-browser support for Chrome and Firefox.
- Built using React, TypeScript, and Tailwind CSS.
- Modular structure for adding new features easily.
- Pre-configured scripts for smooth development and build processes.
- Simple project setup and customization.

## Getting Started

### Prerequisites

Ensure you have the following software installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js. Ensure it’s up-to-date with the command:

  ```bash
  npm install -g npm
  ```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/linkchrome.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd linkchrome
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Prepare for development:**

   After installation, use the development commands to start coding.

## Development Commands

- **Start development in Chrome:**

  ```bash
  npm run dev
  ```

  This command starts the development server for Chrome and automatically reloads the extension on changes.

- **Start development in Firefox:**

  ```bash
  npm run dev:firefox
  ```

  Launches the development environment for Firefox.

- **Compile TypeScript without emitting output:**

  ```bash
  npm run compile
  ```

  Runs TypeScript checks to validate the code without creating compiled files.

## Build Commands

Use these commands to create optimized production builds:

- **Build for Chrome:**

  ```bash
  npm run build
  ```

- **Build for Firefox:**

  ```bash
  npm run build:firefox
  ```


## How to Use LinkChrome

1. **Install the extension:**

   Load the extension in your browser:

   - **Chrome:** Go to `chrome://extensions/`, enable `Developer mode`, and click `Load unpacked`. Choose the `dist` folder.
   - **Firefox:** Go to `about:debugging`, click `This Firefox`, then `Load Temporary Add-on`, and select the `manifest.json` file in the `dist` folder.

2. **Use the extension:**

   After installing, the extension icon should appear in the toolbar. Click on it to see the popup, which contains the React-based UI.

3. **Options Page:**

   To configure the extension settings, right-click on the extension icon and select `Options`.

## Embedding Videos

To embed a video in your markdown file, follow this format:

```markdown
## Video Demonstration

Watch the video below to see how **LinkChrome** works:



## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/linkchrome/issues) to see what needs help.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

---

Happy Coding! 🎉 If you have any questions or need further assistance, feel free to reach out.
