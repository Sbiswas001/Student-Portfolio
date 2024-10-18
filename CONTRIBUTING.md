# Contributing to Student-Portfolio
Thank you for considering contributing to our project! We are excited to have you participate in our Hacktoberfest event. Please follow the guidelines below to contribute your portfolio to the website.

## How to Contribute

1. **Fork the repository**
   - Click the "Fork" button on the top right of this repository page.

2. **Clone your forked repository to your local machine**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
   Replace `your-username` with your GitHub username and `your-repo-name` with the name of this repository.

3. **Create a new branch for your contribution**
   ```bash
   cd your-repo-name
   git checkout -b your-branch-name
   ```
   Replace `your-branch-name` with a descriptive name for your branch.

4. **Add your HTML, CSS, and JS files**
   - Create a new HTML file in the root directory with the name `yourname.html`.
   - Create a new CSS file in the `assets/css` directory with the name `yourname.css`.
   - Create a new JS file in the `assets/js` directory with the name `yourname.js`.
   - Use lowercase letters for your filenames.

5. **Add your images**
   - Create a new directory inside `assets/images` with your name.
   - Add any images you want to include in your portfolio to this directory.

6. **Link your CSS and JS files in your HTML file**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Name's Portfolio</title>
       <link rel="stylesheet" href="assets/css/yourname.css">
   </head>
   <body>
       <!-- Your content goes here -->

       <script src="assets/js/yourname.js"></script>
   </body>
   </html>
   ```

7. **Link your HTML file in assets/js/script.js file**
   ```
   const entries = [
      {
        name: "",
        portfolio: "",
        github: "",
        linkedin: "",
    },
   ]
   ```

8. **Commit your changes**
   ```bash
   git add .
   git commit -m "Added portfolio for Your Name"
   ```

9. **Push your branch to your forked repository**
   ```bash
   git push origin your-branch-name
   ```

10. **Create a Pull Request**
   - Go to the original repository on GitHub.
   - Click the "Compare & pull request" button.
   - Provide a meaningful description of your changes.
   - Submit the pull request.

## Code of Conduct

This project adheres to a [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [sbiswas001.tech@gmail.com](mailto:sbiswas001.tech@gmail.com).

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

---

Feel free to modify the content as per your project's specifics. If you need any more customization or additional sections, let me know!
