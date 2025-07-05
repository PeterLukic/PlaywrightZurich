# 🧪 Playwright Zurich

A Playwright + TypeScript test automation framework for **UI** (OrangeHRM demo) and **API** (Petstore Swagger API) test suites.

---

## ✅ Features

- UI Testing using Playwright with Page Object Model (POM)
- API Testing using Playwright's `APIRequestContext`
- Decoupled test data (JSON fixtures)
- Tags support (`@ui`, `@api`, `@smoke`, `@negative`, etc.)
- Clean, maintainable structure suitable for CI/CD pipelines

---

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/PeterLukic/PlaywrightZurich.git
cd PlaywrightZurich

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## 📦 Running Tests

### 🧭 Run UI Tests

```bash
npx bddgen; npx playwright test --grep /@ui/
```

### 🔁 Run API Tests

```bash
npx bddgen; npx playwright test --grep /@api/
```

### 🔍 Run All Tests

```bash
npx bddgen; npx playwright test
```

### 🖼️ View HTML Report

```bash
npx playwright show-report
```

---

## 📂 Project Structure

```
/
├─ features/                # UI and API feature files and step definitions
├─ pageobjects/             # Page Object classes (LoginPage, AdminPage, etc.)
├─ utils/                   # Utilities and test data (JSON fixtures)
├─ .features-gen/           # Auto-generated BDD step definitions
├─ node_modules/            # Node packages
├─ playwright-report/       # HTML test report output
├─ test-results/            # Raw test result data
├─ package.json             # Project metadata and scripts
├─ playwright.config.ts     # Playwright configuration
├─ .gitignore               # Files and folders to ignore in git
├─ .README.md               # Documentation
```

---

## 🧠 Design & Best Practices

- **POM Architecture**: Encapsulates UI logic in `pageobjects/`
- **Cucumber Steps**: Modular and clean Gherkin steps
- **Randomized Test Data**: Unique usernames/emails reduce conflicts
- **Tags Support**: Use `--grep @tag` to filter tests
- **Traceability**: Screenshots and trace files on failures
- **Isolation**: UI and API concerns are separated

---

## 🛠️ CI/CD Suggestions

- Install with `npm install`
- Run tests using:
  ```bash
  npx bddgen; npx playwright test --grep /@ui/     # for UI
  npx bddgen; npx playwright test --grep /@api/    # for API
  npx bddgen; npx playwright test                  # for all tests
  ```
- Upload `playwright-report` directory as artifact
- Integrate `npx playwright show-report` in post-job step
- Add Slack/email notification on test failures
- Use matrix strategy to run API/UI tests in parallel

---

## 📌 To Do / Future Improvements

- Add screenshot/video capturing
- Introduce visual testing (Playwright snapshot testing)
- Add environment variable support for configs
- Extend negative/edge case tests
- Integrate Allure reporting / XRay test management
- Add ESLint + Prettier

---

## ⚠️ Known Limitations

- OrangeHRM demo site can be slow at times
- Username collisions possible (use more randomized data)
- Fixture files hold test credentials (not safe for production)

---

## 👨‍💻 Author

**Peter Lukic**

GitHub: [@PeterLukic](https://github.com/PeterLukic)
LinkedIN: [@PeterLukic](https://www.linkedin.com/in/peter-luki%C4%87-6bb79382/)

---

## 📃 License

This project is licensed under the MIT License.

