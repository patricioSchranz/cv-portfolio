<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patricio Schranz</title>
    <meta name="description" content="Frontend Developer aus Kärnten">
    <link rel="stylesheet" href="styles/index.css">
</head>
<body>
    <div class="big-container">
        <script src="../src/js/setHeight.js"></script>
        <header class="ps_header">
            <button class="ps_header_hamburger">
                <span class="ps_header_hamburger_line"></span>
                <span class="ps_header_hamburger_line"></span>
                <span class="ps_header_hamburger_line"></span>
            </button>
            
            <nav class="ps_header_nav">
                <ul class="ps_header_nav_ul">
                    <li class="ps_header_nav_ul_li">
                        <a href="#">About Me</a>
                    </li>
                    <li class="ps_header_nav_ul_li">
                        <a href="#">Timeline</a>
                    </li>
                    <li class="ps_header_nav_ul_li">
                        <a href="#">Portfolio</a>
                    </li>
                </ul>
            </nav>

            <h1 class="ps_header_heading">Patricio Schranz</h1>
            <div class="ps_header_blured-circle"></div>
        </header>

        <main class="ps_main">
            <figure class="ps_main_pic-wrapper">
                <div class="ps_main_img"></div>
            </figure>

            <div class="ps_main_container-ul">
                <ul class="ps_main_ul">
                    <li class="ps_main_ul_li">
                        <p>Junior Frontend Developer</p>
    
                        <!-- <ul>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Vanilla JS</li>
                            <li>
                                <a href="#">more</a>
                            </li>
                        </ul> -->
                    </li>
                    <li class="ps_main_ul_li">
                        <a href="#" class="ps_main_ul_li_link">
                            <span class="fake-before" id="about-me-link"></span>
                            About Me
                        </a>
                    </li>
                    <li class="ps_main_ul_li" >
                        <a href="#" class="ps_main_ul_li_link">
                            <span class="fake-before" id="timeline-link"></span>
                           Timeline
                        </a>
                    </li>
                    <li class="ps_main_ul_li" >
                        <a href="#" class="ps_main_ul_li_link">
                            <span class="fake-before" id="portfolio-link"></span>
                           Portfolio
                        </a>
                    </li>
                </ul>
            </div>
            
        </main>
        <span class="scroll-info" data-hint="Benutze dein Mauswheel oder die Pfeiltasten">&#129047;</span>
        <script src="../src/js/setHint.js"></script>
    </div>
    
    
    <div class="scroll-helper"></div>

    <script src="../src/js/hamburger.js"></script>
    <script src="../src/js/index.js"></script>
</body>
</html>