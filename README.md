# Node.js Basic Project with Common Web Libraries

A simple Node.js project showcasing how to use modern web development tools and libraries. This project helps you understand Node.js basics through a practical example that includes common web libraries integration and deployment practices.

## Overview

This project demonstrates:
- Setting up a Node.js development environment
- Using npm to manage external libraries
- Working with modern web libraries (Tailwind CSS, Font Awesome, Google Fonts)
- Using development tools like Browsersync
- Deploying to GitHub Pages

## Prerequisites

- Node.js and npm installed on your machine
- A GitHub account
- Visual Studio Code (recommended)

## Recommended VS Code Extensions

- EditorConfig for VS Code
- Prettier - Code formatter
- HTMLHint

## Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-name]/[repo-name].git
cd [repo-name]
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```
Your browser will automatically open to `http://localhost:3000`

## Project Challenge

The file `src/js/app.js` contains several common implementation issues. Your task is to:
1. Identify the issues in the code
2. Fix them to get the application working
3. Verify the user management functionality works correctly

## Technologies Used

- Node.js and npm for package management
- Tailwind CSS for styling
- Font Awesome for icons
- Google Fonts (Roboto)
- Browser-sync for development server

## Deploying to GitHub Pages

Deploy your version:
```bash
npm run deploy
```
The site will be available at: `https://[your-username].github.io/[repo-name]`

## Project Structure

```
.
├── src/                  # Source files
│   ├── index.html       # Main page
│   └── js/
│       └── app.js       # Application code
├── package.json         # npm configuration
├── bs-config.js         # Browsersync configuration
├── .editorconfig        # EditorConfig settings
├── .prettierrc         # Prettier settings
└── .htmlhintrc         # HTMLHint settings
```
