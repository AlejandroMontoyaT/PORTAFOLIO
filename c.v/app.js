const dict = {
    es: {
        name:"Alejandro Montoya Torres",
        headline:"Ingeniero en Sistemas | Application Support (L2/L3) | Java & SQL",
        location:"México (Remoto / Híbrido / Presencial)",
        pdfEs:"Descargar PDF (ES)",
        pdfEn:"Download PDF (EN)",
        aboutTitle:"Sobre mí",
        about:"Ingeniero en Sistemas con experiencia en soporte técnico especializado y análisis de incidencias en producción. Enfocado en soporte a aplicaciones y bases de datos: SQL avanzado, monitoreo, lectura y debugging de código Java/Spring Boot. Trabajo bajo SLAs e ITIL, documentando causa raíz y colaborando con desarrollo para resolver fallos críticos. Certificaciones: Azure Fundamentals, Oracle Cloud, Scrum Fundamentals.",
        skillsTitle:"Habilidades técnicas",
        skillSupport:"Soporte & Gestión",
        skillDB:"Bases de datos",
        skillBackend:"Backend & Código",
        skillCloud:"Nube & Infra",
        projectsTitle:"Proyectos destacados",
        proj1Date:"Feb 2024 – May 2024 · Generation México",
        proj1a:"APIs REST para catálogo, pedidos y agenda de citas.",
        proj1b:"Despliegue serverless en AWS Lambda; integración frontend responsiva.",
        proj1c:"Optimización de consultas SQL y validación de integridad de datos.",
        proj2a:"Debugging de lógica de negocio en arquitectura APX bajo estándares bancarios.",
        proj2b:"Consultas complejas en Oracle SQL para asegurar integridad de operaciones.",
        proj2c:"Control de versiones y code reviews en entornos ágiles.",
        expTitle:"Experiencia profesional",
        exp1Role:"Soporte Técnico Especializado",
        exp1a:"Monitoreo y diagnóstico de incidencias en bases de datos productivas.",
        exp1b:"Resolución de errores SQL post-migración; análisis de logs.",
        exp1c:"Documentación técnica y reducción de recurrencia vía causa raíz.",
        eduTitle:"Educación y certificaciones",
        contactTitle:"Contacto"
    },
    en: {
        name:"Alejandro Montoya Torres",
        headline:"Systems Engineer | Application Support (L2/L3) | Java & SQL",
        location:"Mexico (Remote / Hybrid / On-site)",
        pdfEs:"Descargar PDF (ES)",
        pdfEn:"Download PDF (EN)",
        aboutTitle:"About",
        about:"Systems Engineer with experience in production incident analysis and application/database support. Strong in advanced SQL, monitoring, log reading and Java/Spring Boot debugging. Works under SLAs/ITIL, documents root cause, and partners with dev teams to resolve critical failures. Certifications: Azure Fundamentals, Oracle Cloud, Scrum Fundamentals.",
        skillsTitle:"Technical skills",
        skillSupport:"Support & Service Mgmt",
        skillDB:"Databases",
        skillBackend:"Backend & Code",
        skillCloud:"Cloud & Infra",
        projectsTitle:"Highlighted projects",
        proj1Date:"Feb 2024 – May 2024 · Generation Mexico",
        proj1a:"REST APIs for catalog, orders and appointment scheduling.",
        proj1b:"Serverless deployment on AWS Lambda; responsive frontend integration.",
        proj1c:"SQL query optimization and data integrity validation.",
        proj2a:"Business-logic debugging in APX architecture under banking standards.",
        proj2b:"Complex Oracle SQL queries to ensure transaction integrity.",
        proj2c:"Version control and code reviews in agile environments.",
        expTitle:"Professional experience",
        exp1Role:"Specialized Technical Support",
        exp1a:"Monitoring and diagnosis of production database incidents.",
        exp1b:"Post-migration SQL error resolution; log analysis.",
        exp1c:"Technical documentation and recurrence reduction via root cause.",
        eduTitle:"Education & certifications",
        contactTitle:"Contact"
    }
};

let currentLang='es';

function applyLang(lang){
    currentLang=lang;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key=el.dataset.i18n;
        if(dict[lang][key]) el.textContent=dict[lang][key];
    });
}

function downloadLang(lang){
    applyLang(lang);
    window.print(); // Usa “Guardar como PDF” en el diálogo del navegador.
}

document.getElementById('langToggle').addEventListener('click',()=>{
    applyLang(currentLang==='es'?'en':'es');
});