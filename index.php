<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Mateo Carciu</title>

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/unicons.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">

    <!-- MAIN STYLE -->
    <link rel="stylesheet" href="css/tooplate-style.css">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

  </head>
  <body>

    <!-- MENU -->
    <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.php"><i class='uil uil-user'></i> Mateo Carciu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a href="#about" class="nav-link"><span data-hover="A propos">A propos</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#project" class="nav-link"><span data-hover="Projets">Projets</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link"><span data-hover="Expérience professionnelle">Expérience professionnelle</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-lg-auto">
                    <div class="ml-lg-4">
                      <div class="color-mode d-lg-flex justify-content-center align-items-center">
                        <i class="color-mode-icon"></i>
                        Changer
                      </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Acc -->
    <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div class="about-text">
                        <small class="small-text">Bienvenue <span class="mobile-block">sur mon portfolio !</span></small>
                        <h1 class="animated animated-text">
                            <span class="mr-2">Je suis </span>
                                <div class="animated-info">
                                    <span class="animated-item">Etudiant</span>
                                    <span class="animated-item">Développeur</span> 
                                </div>
                        </h1>
                        <p>Actuellement en 2ème année de BTS SIO!</p>
                        <div class="custom-btn-group mt-4">
                          <!-- <a href="#" class="btn mr-lg-2 custom-btn"><i class='uil uil-file-alt'></i> Télécharger mon cv ! </a> -->
                          <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Me contacter !</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12 col-12">
                    <div class="about-image svg">
                        <img src="images/undraw/img.png" class="img-fluid" alt="svg image">
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- PROJETS -->
    <section class="project py-5" id="project">
        <div class="container">
                <div class="row">
                  <div class="col-lg-11 text-center mx-auto col-12">
                      <div class="col-lg-8 mx-auto">
                        <h2>Projets réalisés</h2><br><br>
                      </div>
                      <div class="owl-carousel owl-theme">
                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/eco1.png" class="img-fluid" alt="project image">
                          </div>
                        </div>
                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/eco2.png" class="img-fluid" alt="project image">
                          </div>
                        </div>
                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/gestion1.png" class="img-fluid" alt="project image">
                          </div>
                        </div>
                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/gestion2.png" class="img-fluid" alt="project image">
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
        </div>
    </section>

    <!-- CV -->
    <section class="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                  <h2 class="mb-4">Expérience professionnelle</h2>
                    <div class="timeline">
                        <div class="timeline-wrapper">
                             <div class="timeline-yr">
                                  <span>2022</span>
                             </div>
                             <div class="timeline-info">
                                  <h3><span>Eco cartouches</span><br><small>Stage de 6 semaines (2022)</small></h3>
                                  <p>Développement d'un CRUD pour la gestion des salariés et des stagiaires.</p>
                                  <small>Langages utilisés : Php, Html, Css, Sql, JavaScript</small>
                             </div>
                        </div>
                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2021</span>
                            </div>
                            <div class="timeline-info">
                                <h3><span>Eco cartouches</span><br><small>Stage de 6 semaines (2021)</small></h3>
                                <p>Développement et restylisation d'un site internet.</p>
                                <small>Langages utilisés : Php, Html, Css, JavaScript</small>
                            </div>
                        </div>
                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2020</span>
                            </div>
                            <div class="timeline-info">
                              <h3><span>Joué Club</span><br><small>Trois stages de 4 semaines (2018-2020)</small></h3>
                                <p>Vente de jouets, réception de la clientèle ainsi que  de la marchandise. </p>
                            </div>
                        </div>
                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2017</span>
                            </div>
                            <div class="timeline-info">
                                <h3><span>Les charmilles<br><small>Stage de 2 semaines dans un hôtel (2017)</small></h3>
                                <p>Réception de la clientèle et serveur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                  <h2 class="mb-4 mobile-mt-2">Formations</h2>
                    <div class="timeline">
                        <div class="timeline-wrapper">
                             <div class="timeline-yr">
                                  <span>2022</span>
                             </div>
                             <div class="timeline-info">
                                  <h3><span>BTS</span><small>BTS SIO (2020-2022)</small></h3>
                                  <p>BTS SIO spécialité SLAM (conception et développement d'applications).</p>
                             </div>
                        </div>
                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2020</span>
                            </div>
                            <div class="timeline-info">
                                <h3><span>Bac pro</span><small>Bac pro Commerce (2017-2020)</small></h3>
                                <p>Bac obtenu avec la mention bien !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT -->
    <section class="contact py-5" id="contact">
      <div class="container">
      <h2 class="mb-4">Me contacter !</h2>
        <div class="row">
          <div class="col-lg-5 mr-lg-5 col-12">
            <div class="google-map w-100">
              <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chalon%20sur%20saone+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
            <div class="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div class="contact-info-item">
                  <p class="footer-text mb-0">07 69 13 48 75</p>
                  <p><a href="mailto:Mateocarciu1@gmail.com">Mateocarciu1@gmail.com</a></p>
                </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="contact-form">
              
              <form action="#contact" method="POST" onsubmit="return checkform(this)">

                <div class="row">
                  <div class="col-lg-6 col-12">
                    <input type="text" class="form-control" name="name" placeholder="Nom Prénom" id="name" required 
                    oninvalid="this.setCustomValidity('Veuillez entrer le nom et le prénom')"
						        oninput="this.setCustomValidity('')">
                  </div>
                  <div class="col-lg-6 col-12">
                    <input type="text" class="form-control" name="email" placeholder="Email" id="email" required 
                    oninvalid="this.setCustomValidity('Veuillez entrer un email')"
						        oninput="this.setCustomValidity('')">
                  </div>
                  <div class="col-lg-6 col-12">
                    <input type="text" class="form-control" name="sub" placeholder="Objet" id="sub" required 
                    oninvalid="this.setCustomValidity('Veuillez entrer un objet')"
						        oninput="this.setCustomValidity('')">
                  </div>
                  <div class="col-12">
                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Message" required 
                    oninvalid="this.setCustomValidity('Veuillez entrer un message')"
						        oninput="this.setCustomValidity('')"></textarea>
                  </div>
                  <div class="ml-lg-auto col-lg-5 col-12">
                    <input type="submit" name="submit" class="form-control submit-btn" value="Envoyer">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
     <footer class="footer py-5">
          <div class="container">
               <div class="row">
                    <div class="col-lg-12 col-12">                                
                        <p class="copyright-text text-center">Copyright &copy; 2022 Mateo CARCIU</p>
                    </div>
               </div>
          </div>
     </footer>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/Headroom.js"></script>
    <script src="js/jQuery.headroom.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/custom.js"></script>

  </body>
</html>