const entries = [
    {
        name: "Sayan Biswas",
        portfolio: "sayanbiswas.html",
        github: "https://github.com/Sbiswas001",
        linkedin: "https://www.linkedin.com/in/sbiswas001",
    },
    
    {
        name: "Arkapravo Roy",
        portfolio: "arkapravoroy.html",
        github: "https://github.com/SilentAssasin10",
        linkedin: "https://www.linkedin.com/in/arkapravo-roy-7067442b6/",
    },
    {
        name: "Bidwattar Kar",
        portfolio: "bidwattarkar.html",
        github: "https://github.com/Bidwattar98",
        linkedin: "https://www.linkedin.com/in/bidwattar-kar-963399289/",
    },
    {
        name: "Md Danish Ansari",
        portfolio: "danish.html",
        github: "https://github.com/mddanish004",
        linkedin: "https://www.linkedin.com/in/mddanish004/",
    },
    {
        name: "Riyanka Nandi",
        portfolio: "riyankanandi.html",
        github: "https://github.com/riyankanandi",
        linkedin: "https://www.linkedin.com/in/riyanka-nandi-b16b64293/",
    },
    {
        name: "Rupankar Saha",
        portfolio: "rupankar.html",
        github: "https://github.com/Rupankarsaha",
        linkedin: "https://www.linkedin.com/in/rupankar-saha-036945294/",
    },
    {
        name: "Saurya Sharma",
        portfolio: "sauryasharma.html",
        github: "https://github.com/StormyShu",
    },
    {
        name: "Sayan Guha",
        portfolio: "sayanguha.html",
        github: "https://github.com/SayanGuha04",
    },
    {
        name: "Soham Banik",
        portfolio: "sohambanik.html",
        github: "https://github.com/coolsoham",
    },
    {
        name: "Sourav Mukherjee",
        portfolio: "souravmukherjee.html",
        github: "https://github.com/SouravM1",
        linkedin: "https://www.linkedin.com/in/sourav-mukherjee-892447301/",
    },
    {
        name: "Sutanu Saha",
        portfolio: "sutanusaha.html",
        github: "https://github.com/sutanusaha1920",
        linkedin: "https://www.linkedin.com/in/sutanu-saha-b89b87292/",
    },
    {
        name: "Tithibrata Biswas",
        portfolio: "tithibratabiswas.html",
        github: "https://github.com/T1050",
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
    portfolioCell.innerHTML = entry.portfolio ? `<a target="_blank" href="${entry.portfolio}">Portfolio</a>` : 'N/A';
    githubCell.innerHTML = entry.github ? `<a target="_blank" href="${entry.github}">Github</a>` : 'N/A';
    linkedinCell.innerHTML = entry.linkedin ? `<a target="_blank" href="${entry.linkedin}">Linkedin</a>` : 'N/A';

    row.appendChild(nameCell);
    row.appendChild(portfolioCell);
    row.appendChild(githubCell);
    row.appendChild(linkedinCell);

    tbody.appendChild(row);
});
