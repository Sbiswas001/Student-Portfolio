# ✨ Contributing to Student Portfolio

Thank you for your interest in contributing to **Student Portfolio** – a collaborative Hacktoberfest-friendly platform for students and developers to showcase their portfolios!

We welcome all types of contributions — from fixing bugs and improving UI to adding your own portfolio page.

---

## 🧾 Prerequisites

Before you begin:

* Make sure you have a [GitHub](https://github.com) account.
* Install [Git](https://git-scm.com/) on your local machine.
* (Optional but recommended) Use a code editor like [VS Code](https://code.visualstudio.com/).

---

## 🚀 How to Contribute

### 1. **Fork the Repository**

Click the **Fork** button on the top right of the [repository page](https://github.com/Sbiswas001/Student-Portfolio) to copy this repo to your GitHub account.

### 2. **Clone Your Fork**

```bash
git clone https://github.com/your-username/Student-Portfolio.git
cd Student-Portfolio
```

### 3. **Create Your Portfolio Folder**

Navigate to `src/contributors/` and create a folder named after you (e.g., `JohnDoe/`).

Inside it, add the following files:

* `YourName.html`
* `YourName.css`
* `YourName.js`
* *(Optional)* An `images/` folder with any assets you use

### 4. **Add Required Meta Tags**

In your `YourName.html`, add the following `<meta>` tags in the `<head>`:

```html
<meta name="name" content="Your Full Name" />
<meta name="github" content="https://github.com/yourusername" />
<meta name="linkedin" content="https://linkedin.com/in/yourprofile" />
```

### 5. **That’s it! 🎉**

You **do not need to manually edit `contributors.json`** — it’s auto-generated after every merge to `main`.

Just commit and push your changes, and create a **pull request**.

---

## ✅ Example Folder Structure

```
src/contributors/
└── JaneDoe/
    ├── JaneDoe.html
    ├── JaneDoe.css
    ├── JaneDoe.js
    └── images/
        ├── profile.png
        └── banner.jpg
```

---

## 🧪 Local Preview (Optional but Recommended)

If you're using VS Code:

1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.
3. You'll see the contributors list update based on your HTML metadata.

> ⚠️ `fetch()` won’t work on file:// — use Live Server or a simple static server like:

```bash
npx serve .
```

---

## 🔁 After Your PR Is Merged

Once your PR is accepted and merged:

* The `contributors.json` file will be regenerated automatically.
* Your portfolio will appear instantly on the homepage.

---

## 🛡️ Code of Conduct

Please be respectful and inclusive. All contributions must adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) *(create one if not present)*.

---

## 🙌 Thank You

You're awesome for contributing!
We hope this project helps you learn, grow, and showcase your skills.

Happy Coding! 💻✨

---