# Contributing to Rohit UI

Thank you for your interest in contributing to Rohit UI! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

- Check if the bug has already been reported in the Issues section
- Use the bug report template when creating a new issue
- Include detailed steps to reproduce the bug
- Include screenshots or videos if applicable
- Specify your environment (browser, OS, etc.)

### Suggesting Features

- Check if the feature has already been suggested in the Issues section
- Use the feature request template when creating a new issue
- Provide a clear description of the feature
- Explain why this feature would be useful
- Include any mockups or examples if applicable

### Pull Requests

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Run tests and ensure they pass
5. Update documentation if necessary
6. Submit a pull request

### Development Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rohit-ui.git
cd rohit-ui
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Coding Standards

- Follow the existing code style
- Use TypeScript for all new code
- Write meaningful commit messages
- Keep changes focused and atomic
- Add tests for new features
- Update documentation as needed

### Testing

- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Add integration tests for complex features
- Test across different browsers and devices

### Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update component documentation
- Include usage examples

## Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:

- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

## Review Process

1. All PRs require at least one review
2. CI checks must pass
3. Code must follow style guidelines
4. Documentation must be updated
5. Tests must be added/updated

## Getting Help

- Check the [documentation](https://rohit-ui.com/docs)
- Join our [Discord community](https://discord.gg/rohit-ui)
- Open an issue for questions

## License

By contributing to Rohit UI, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
