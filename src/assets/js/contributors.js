fetch("src/contributors/contributors.json")
  .then((res) => res.json())
  .then((files) => {
    files.forEach((file) => {
      const filePath = `src/contributors/${file}`;
      fetch(filePath)
        .then((res) => res.text())
        .then((html) => {
          const doc = new DOMParser().parseFromString(html, "text/html");

          const name =
            doc.querySelector('meta[name="name"]')?.content ||
            file.split("/").pop().replace(".html", "");

          const github =
            doc.querySelector('meta[name="github"]')?.content || "";
          const linkedin =
            doc.querySelector('meta[name="linkedin"]')?.content || "";

          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${name}</td>
            <td><a href="${filePath}" target="_blank">View</a></td>
            <td>${
              github ? `<a href="${github}" target="_blank">GitHub</a>` : "N/A"
            }</td>
            <td>${
              linkedin
                ? `<a href="${linkedin}" target="_blank">LinkedIn</a>`
                : "N/A"
            }</td>
          `;

          document.getElementById("table-body").appendChild(row);
        });
    });
  })
  .catch((err) => {
    console.error("Error loading contributors:", err);
  });
