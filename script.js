const entries = [
    {
        name: "Sayan Biswas",
        portfolio: "sayanbiswas.html",
        github: "https://github.com/Sbiswas001",
        linkedin: "https://www.linkedin.com/in/sbiswas001"
    },
    {
        name: "Arkapravo Roy",
        portfolio: "arkapravoroy.html",
        github: "https://github.com/SilentAssasin10",

    },
    {
        name: "Bidwattar Kar",
        portfolio: "bidwattarkar.html",
        github: "https://github.com/Bidwattar98",

    },
];

const tbody = document.getElementById("table-body");

entries.forEach((entry) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const portfolioCell = document.createElement("td");
    const githubCell = document.createElement("td");
    const linkedinCell = document.createElement("td");

    nameCell.textContent = entry.name;
    portfolioCell.innerHTML = entry.portfolio ? `<a href="${entry.portfolio}">Portfolio</a>` : 'N/A';
    githubCell.innerHTML = entry.github ? `<a href="${entry.github}">Github</a>` : 'N/A';
    linkedinCell.innerHTML = entry.linkedin ? `<a href="${entry.linkedin}">Linkedin</a>` : 'N/A';

    row.appendChild(nameCell);
    row.appendChild(portfolioCell);
    row.appendChild(githubCell);
    row.appendChild(linkedinCell);

    tbody.appendChild(row);
});
