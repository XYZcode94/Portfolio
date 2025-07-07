# Portfolio
About my  journey of life | Achievement of my life

flowchart TD
    %% Main Layers
    U["User Browser"]:::user
    H["Static Hosting / CDN"]:::hosting

    U -->|requests static assets| H

    %% HTML Files
    subgraph "HTML Files" 
        direction TB
        index["index.html"]:::frontend
        pagesDir["pages/"]:::frontend
        index -->|"links to"| pagesDir
        pagesDir --> ai["ai-ml.html"]:::frontend
        pagesDir --> db["database-management.html"]:::frontend
        pagesDir --> mobile["mobile-development.html"]:::frontend
        pagesDir --> ui["ui-ux-design.html"]:::frontend
        pagesDir --> video["video-editing.html"]:::frontend
        pagesDir --> web["web-development.html"]:::frontend
        pagesDir --> work["workpage.html"]:::frontend
        pagesDir --> thank["thankyou.html"]:::frontend
    end

    %% CSS Files
    subgraph "Stylesheets (assets/css)" 
        direction TB
        cssDir["assets/css/"]:::css
        cssDir --> aiCss["ai&ml.css"]:::css
        cssDir --> dbCss["database.css"]:::css
        cssDir --> mobCss["mobile-dev.css"]:::css
        cssDir --> styleCss["style.css"]:::css
        cssDir --> thankCss["thankyou.css"]:::css
        cssDir --> webCss["web-dev.css"]:::css
        cssDir --> workCss["workpage.css"]:::css
    end

    %% JS Files
    subgraph "Scripts (assets/script)"
        direction TB
        jsDir["assets/script/"]:::script
        jsDir --> aiJs["ai-ml.js"]:::script
        jsDir --> webJs["web-dev.js"]:::script
        jsDir --> mainJs["script.js"]:::script
    end

    %% Images
    subgraph "Images (assets/image)" 
        direction TB
        imgDir["assets/image/"]:::image
    end

    %% Documents
    subgraph "Documents (assets/docs)"
        direction TB
        docsDir["assets/docs/"]:::docs
        docsDir --> cv["CV.pdf"]:::docs
    end

    %% Configuration Files
    subgraph "Configuration"
        direction TB
        robots["robots.txt"]:::config
        sitemap["sitemap.xml"]:::config
        google["googleb44328186f7c82f4.html"]:::config
    end

    %% Connections from Hosting
    H --> index
    H --> pagesDir
    H --> cssDir
    H --> jsDir
    H --> imgDir
    H --> docsDir
    H --> robots
    H --> sitemap
    H --> google

    %% Click Events
    click index "https://github.com/xyzcode94/portfolio/blob/main/index.html"
    click pagesDir "https://github.com/xyzcode94/portfolio/tree/main/assests/pages/"
    click ai "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/ai-ml.html"
    click db "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/database-management.html"
    click mobile "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/mobile-development.html"
    click ui "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/ui-ux-design.html"
    click video "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/video-editing.html"
    click web "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/web-development.html"
    click work "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/workpage.html"
    click thank "https://github.com/xyzcode94/portfolio/blob/main/assests/pages/thankyou.html"
    click cssDir "https://github.com/xyzcode94/portfolio/tree/main/assests/css/"
    click aiCss "https://github.com/xyzcode94/portfolio/blob/main/assests/css/ai&ml.css"
    click dbCss "https://github.com/xyzcode94/portfolio/blob/main/assests/css/database.css"
    click mobCss "https://github.com/xyzcode94/portfolio/blob/main/assests/css/mobile-dev.css"
    click styleCss "https://github.com/xyzcode94/portfolio/blob/main/assests/css/style.css"
    click thankCss "https://github.com/xyzcode94/portfolio/blob/main/assests/css/thankyou.css"
    click webCss "https://github.com/xyzcode94/portfolio/blob/main/assests/css/web-dev.css"
    click workCss "https://github.com/xyzcode94/portfolio/blob/main/assests/css/workpage.css"
    click jsDir "https://github.com/xyzcode94/portfolio/tree/main/assests/script/"
    click aiJs "https://github.com/xyzcode94/portfolio/blob/main/assests/script/ai-ml.js"
    click webJs "https://github.com/xyzcode94/portfolio/blob/main/assests/script/web-dev.js"
    click mainJs "https://github.com/xyzcode94/portfolio/blob/main/assests/script/script.js"
    click imgDir "https://github.com/xyzcode94/portfolio/tree/main/assests/image/"
    click docsDir "https://github.com/xyzcode94/portfolio/tree/main/assests/docs/"
    click cv "https://github.com/xyzcode94/portfolio/blob/main/assests/docs/CV.pdf"
    click robots "https://github.com/xyzcode94/portfolio/blob/main/robots.txt"
    click sitemap "https://github.com/xyzcode94/portfolio/blob/main/sitemap.xml"
    click google "https://github.com/xyzcode94/portfolio/blob/main/googleb44328186f7c82f4.html"

    %% Styles
    classDef user fill:#FFFACD,stroke:#333,stroke-width:1px
    classDef hosting fill:#FFA500,stroke:#333,stroke-width:1px
    classDef frontend fill:#ADD8E6,stroke:#333,stroke-width:1px
    classDef css fill:#90EE90,stroke:#333,stroke-width:1px
    classDef script fill:#98FB98,stroke:#333,stroke-width:1px
    classDef image fill:#FFEFD5,stroke:#333,stroke-width:1px
    classDef docs fill:#D3D3D3,stroke:#333,stroke-width:1px
    classDef config fill:#F5DEB3,stroke:#333,stroke-width:1px


Directory structure:
└── xyzcode94-portfolio/
    ├── README.md
    ├── googleb44328186f7c82f4.html
    ├── index.html
    ├── robots.txt
    ├── sitemap.xml
    └── assests/
        ├── css/
        │   ├── ai&ml.css
        │   ├── database.css
        │   ├── mobile-dev.css
        │   ├── style.css
        │   ├── thankyou.css
        │   ├── web-dev.css
        │   └── workpage.css
        ├── pages/
        │   ├── ai-ml.html
        │   ├── database-management.html
        │   ├── mobile-development.html
        │   ├── thankyou.html
        │   ├── ui-ux-design.html
        │   ├── video-editing.html
        │   ├── web-development.html
        │   └── workpage.html
        └── script/
            ├── ai-ml.js
            ├── script.js
            └── web-dev.js
