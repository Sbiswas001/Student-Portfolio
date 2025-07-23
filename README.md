# 🎓 Student Portfolio

A collaborative portfolio showcase for **Hacktoberfest contributors**. This simple, responsive HTML project lets students and developers display their portfolios in a shared environment.

Each contributor gets a dedicated folder for their portfolio with custom HTML, CSS, JS, and **optional images**, which gets auto-listed on the homepage.

---

## 📁 Project Structure

```
Student-Portfolio/
│
├── index.html                     # Homepage with dynamic contributor table
├── src/
│   ├── assets/
│   │   ├── css/                   # Shared styles (e.g. styles.css)
│   │   ├── js/                    # JS logic (contributors.js, generateContributorsList.js)
│   └── contributors/
│       ├── contributors.json      # Auto-generated list of contributor HTML files
│       └── [YourName]/            # Your personal portfolio folder
│           ├── YourName.html
│           ├── YourName.css
│           ├── YourName.js
│           └── images/           # (Optional) Images used in your portfolio
│
├── README.md
├── LICENSE
└── .github/                       # (Issue templates, workflows, etc.)
```

---

## 🚀 Features

* 📜 Clean and modular portfolio template
* 🧩 Contributor-based folder structure
* 🔄 **Automatic listing on homepage** from `contributors.json`
* 🔍 Meta-tag driven info extraction (name, GitHub, LinkedIn)
* ⚡ 100% client-side, **no backend required**

---

## 🛠 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sbiswas001/Student-Portfolio.git
cd Student-Portfolio
```

### 2. Open the Project

You can open `index.html` directly or use a live server (recommended for local fetch):

```bash
# Install Live Server if using VSCode
# OR use any static server like serve, http-server, etc.
```

### 3. View in Browser

Launch `index.html` and you’ll see all contributor portfolios listed dynamically.

---

## ✍️ How to Contribute

1. Fork the repo.

2. Create a folder under `src/contributors/` with your name.

3. Add:

   * `YourName.html`
   * `YourName.css`
   * `YourName.js`
   * Optionally an `images/` folder for your assets

4. Add meta tags to your HTML file:

   ```html
   <meta name="name" content="Your Name" />
   <meta name="github" content="https://github.com/yourprofile" />
   <meta name="linkedin" content="https://linkedin.com/in/yourprofile" />
   ```

5. That's it! ✅

> No need to manually update `contributors.json`. It will be auto-generated after your PR is merged.

---

## 🔁 Automation After Merge

A script (`generateContributorsList.js`) is run automatically to update `contributors.json` whenever a new contributor folder is added or modified. This ensures the homepage always shows the latest contributors without any manual effort.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

For questions, suggestions, or issues, feel free to:

* Open an [issue](https://github.com/Sbiswas001/Student-Portfolio/issues)
* Email the maintainer: **[sbiswas001.tech@gmail.com](mailto:sbiswas001.tech@gmail.com)**

---
