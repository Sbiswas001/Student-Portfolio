// This script fetches the list of contributors and dynamically populates the table.

fetch("src/contributors/contributors.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((files) => {
    const tableBody = document.getElementById("table-body");

    files.forEach((file) => {
      const filePath = `src/contributors/${file}`;

      fetch(filePath)
        .then((res) => res.text())
        .then((html) => {
          const doc = new DOMParser().parseFromString(html, "text/html");

          // Extract data from meta tags
          const name =
            doc.querySelector('meta[name="name"]')?.content ||
            file.split("/")[0]; // Fallback to folder name
          const github =
            doc.querySelector('meta[name="github"]')?.content || "";
          const linkedin =
            doc.querySelector('meta[name="linkedin"]')?.content || "";

          // Create the table row
          const row = document.createElement("tr");
          row.innerHTML = `
            <td data-label="Name">${name}</td>
            <td data-label="Portfolio"><a href="${filePath}" target="_blank">View Portfolio</a></td>
            <td data-label="GitHub">${
              github ? `<a href="${github}" target="_blank">GitHub</a>` : "N/A"
            }</td>
            <td data-label="LinkedIn">${
              linkedin
                ? `<a href="${linkedin}" target="_blank">LinkedIn</a>`
                : "N/A"
            }</td>
          `;

          tableBody.appendChild(row);
        })
        .catch((err) =>
          console.error(`Error fetching individual portfolio: ${file}`, err)
        );
    });
  })
  .catch((err) => {
    console.error("Error loading contributors.json:", err);
    // Optional: Display an error message to the user on the page
    const tableBody = document.getElementById("table-body");
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="4" style="text-align: center;">Could not load contributor data.</td>`;
    tableBody.appendChild(row);
  });
