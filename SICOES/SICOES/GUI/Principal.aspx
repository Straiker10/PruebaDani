<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage/MasterPageSicoes.Master" AutoEventWireup="true" CodeBehind="Principal.aspx.cs" Inherits="SICOES.GUI.Principal" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

     <div id="homeCarousel" class="carousel slide carousel-home" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#homeCarousel" data-slide-to="1"></li>
            <li data-target="#homeCarousel" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="item active">   
              <img src="../Resource/Imagenes/images/slider/home-slider-1.jpg" alt="">
              <div class="container">
                <div class="carousel-caption">
                  <h2 class="carousel-title bounceInDown animated slow">Because they need your help</h2>
                  <h4 class="carousel-subtitle bounceInUp animated slow ">Do not let them down</h4>
                  <a href="#" class="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow" data-toggle="modal" data-target="#donateModal">DONATE NOW</a>

                </div> <!-- /.carousel-caption -->

              </div>

            </div> <!-- /.item -->


            <div class="item ">

              <img src="../Resource/Imagenes/images/slider/home-slider-2.jpg" alt="">

              <div class="container">

                <div class="carousel-caption">

                  <h2 class="carousel-title bounceInDown animated slow">Together we can improve their lives</h2>
                  <h4 class="carousel-subtitle bounceInUp animated slow"> So let's do it !</h4>
                  <a href="#" class="btn btn-lg btn-secondary hidden-xs bounceInUp animated" data-toggle="modal" data-target="#donateModal">DONATE NOW</a>

                </div> <!-- /.carousel-caption -->

              </div>

            </div> <!-- /.item -->
            <div class="item ">

              <img src="../Resource/Imagenes/images/slider/home-slider-3.jpg" alt="">

              <div class="container">

                <div class="carousel-caption">

                  <h2 class="carousel-title bounceInDown animated slow" >A penny is a lot of money, if you have not got a penny.</h2>
                  <h4 class="carousel-subtitle bounceInUp animated slow">You can make the diffrence !</h4>
                  <a href="#" class="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow" data-toggle="modal" data-target="#donateModal">DONATE NOW</a>

                </div> <!-- /.carousel-caption -->

              </div>

            </div> <!-- /.item -->

          </div>

          <a class="left carousel-control" href="#homeCarousel" role="button" data-slide="prev">
            <span class="fa fa-angle-left" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
          </a>

          <a class="right carousel-control" href="#homeCarousel" role="button" data-slide="next">
            <span class="fa fa-angle-right" aria-hidden="true"></span>
            <span class="sr-only">Siguiente</span>
          </a>

    </div><!-- /.carousel -->
    <div class="main-container">
		<div class="container">
			<div class="row fadeIn animated">
				<div class="col-md-6">
					<img src="../Resource/Imagenes/images/about-us.jpg" alt="" class="img-responsive">
				</div>
				<div class="col-md-6">
					<h2 class="title-style-2">A la comunidad estudiantil<span class="title-under"></span></h2>
                    <p>Este año es motivo de orgullo y alegría pues nuestra preparatoria, gracias a una trayectoria de crecimiento continuo y firme en la Educación Media Superior, se perfila en ofrecer un mejor servicio día a día de este nivel educativo en la comunidad de Hunucmá.</p>
				</div>

			</div> <!-- /.row -->

			<div class="section-home about-us">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="about-us-col">
                            <div class="col-icon-wrapper">
                                <div class="single-service">
                                <img src="../Resource/Imagenes/images/icons/our-mission-icon.png" />
                                <h3 class="col-title">Nuestra Misión</h3>
                                <div class="col-details">
                                    <p class="col-details">Brindar el servicio de Bachillerato a la comunidad estudiantil, de obras de acción social, cultural y deportiva a la comunidad en general con las actividades que realiza...</p>
                                </div>
                            </div>
                            <a href="MisionVision.aspx" class="btn btn-primary"> Leer Mas... </a>
                                </div>
                            
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="about-us-col">
                            <div class="col-icon-wrapper">
                                 <img src="../Resource/Imagenes/images/icons/make-donation-icon.png" alt="">

                            </div>
                            <h3 class="col-title">Make donations</h3>
                            <div class="col-details">
                                <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
			                </div>
                            <a href="#" class="btn btn-primary"> Read more </a>
                        </div>
                    </div>
                     <div class="col-md-3 col-sm-6"><div class="about-us-col">

			                        <div class="col-icon-wrapper">
			                          <img src="../Resource/Imagenes/images/icons/help-icon.png" alt="">
			                        </div>
			                        <h3 class="col-title">Help & support</h3>
			                        <div class="col-details">

			                          <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
			                          
			                        </div>
			                        <a href="#" class="btn btn-primary"> Read more </a>
			                    
			                  </div>
			                  
			                </div>


			                <div class="col-md-3 col-sm-6">
			                
			                  <div class="about-us-col">

			                        <div class="col-icon-wrapper">
			                          <img src="../Resource/Imagenes/images/icons/programs-icon.png" alt="">
			                        </div>
			                        <h3 class="col-title">our programs</h3>
			                        <div class="col-details">

			                          <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
			                          
			                        </div>
			                        <a href="#" class="btn btn-primary"> Read more </a>
			                    
			                  </div>
			                  
			                </div>
			                

			                
			            </div> <!-- /.row -->

			      
			    </div> 

		</div> 
        <!-- /.about-us -->
	    <div class="our-team animate-onscroll fadeIn">

	        <div class="container">

	            <h2 class="title-style-1">Nuestro Equipo De Trabajo <span class="title-under"></span></h2>

	            <div class="row">

	                <div class="col-md-3 col-sm-6">

	                    <div class="team-member">

	                        <div class="thumnail">
                                
	                            <img src="../Resource/Imagenes/foto.jpg" alt="" class="cause-img">
	                            
	                        </div>



	                        <h4 class="member-name"><a href="#">Diosemir Isael Nah May</a></h4>

	                        <div class="member-position">
	                            Lider Equipo
	                        </div>

	                        <div class="btn-holder">

	                          <a href="#" class="btn"> <i class="fa fa-envelope"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-facebook"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-google"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-twitter"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-linkedin"></i> </a>
	                          
	                        </div>

	                        

	                    </div> <!-- /.team-member -->
	                    
	                </div>

	                <div class="col-md-3 col-sm-6">

	                    <div class="team-member">

	                        <div class="thumnail">
	                            <img src="../Resource/Imagenes/foto2.jpg" alt="" class="cause-img">
	                        </div>
	                        <h4 class="member-name"><a href="#">Edgar Daniel Vazquez</a></h4>

	                        <div class="member-position">
	                            BEBE JAJAJAJA XD
	                        </div>

	                        <div class="btn-holder">

	                          <a href="#" class="btn"> <i class="fa fa-envelope"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-facebook"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-google"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-twitter"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-linkedin"></i> </a>
	                          
	                        </div>

	                        

	                    </div> <!-- /.team-member -->
	                    
	                </div>


	               <!-- <div class="col-md-3 col-sm-6">

	                    <div class="team-member">

	                        <div class="thumnail">

	                            <img src="../Resource/Imagenes/images/team/member-4.jpg" alt="" class="cause-img">
	                            
	                        </div>



	                        <h4 class="member-name"><a href="#">Allison J. Falls</a></h4>

	                        <div class="member-position">
	                            CO-FOUNDER
	                        </div>

	                        <div class="btn-holder">

	                          <a href="#" class="btn"> <i class="fa fa-envelope"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-facebook"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-google"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-twitter"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-linkedin"></i> </a>
	                          
	                        </div>

	                        

	                    </div>
                       
	                    
	                </div>


	                <div class="col-md-3 col-sm-6">

	                    <div class="team-member">

	                        <div class="thumnail">

	                            <img src="../Resource/Imagenes/images/team/member-2.jpg" alt="" class="cause-img">
	                            
	                        </div>



	                        <h4 class="member-name"><a href="#">Bryan B. Stevens</a></h4>

	                        <div class="member-position">
	                            CO-FOUNDER
	                        </div>

	                        <div class="btn-holder">

	                          <a href="#" class="btn"> <i class="fa fa-envelope"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-facebook"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-google"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-twitter"></i> </a>
	                          <a href="#" class="btn"> <i class="fa fa-linkedin"></i> </a>
	                          
	                        </div>

	                        

	                    </div> -->
	                    
	                </div>

	            </div>< <!-- /.row -->

	        </div>

	    </div>
		


	</div>

      <footer class="main-footer">

        <div class="footer-top">
            
        </div>

        <div class="footer-main">
            <div class="container">
                
                <div class="row">
                    <div class="col-md-4">

                        <div class="footer-col">

                            <h4 class="footer-title">About us <span class="title-under"></span></h4>

                            <div class="footer-content">

                                <p>
                                    <strong>Sadaka</strong> ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                                </p> 

                                <p>
                                    ILorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                                </p>

                            </div>
                            
                        </div>

                    </div>

                    <div class="col-md-4">

                        <div class="footer-col">

                            <h4 class="footer-title">LAST TWEETS <span class="title-under"></span></h4>

                            <div class="footer-content">
                                <ul class="tweets list-unstyled">
                                    <li class="tweet"> 

                                        20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar  http://t.co/fTSazikPd4 

                                    </li>

                                    <li class="tweet"> 

                                        20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar  http://t.co/fTSazikPd4 

                                    </li>

                                    <li class="tweet"> 

                                        20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar  http://t.co/fTSazikPd4 

                                    </li>

                                </ul>
                            </div>
                            
                        </div>

                    </div>
                    <div class="col-md-4">

                        <div class="footer-col">

                            <h4 class="footer-title">Contact us <span class="title-under"></span></h4>

                            <div class="footer-content">

                                <div class="footer-form">
                                    
                                    <div class="footer-form" >
                                    
                                    <form action="php/mail.php" class="ajax-form">

                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" placeholder="Name" required>
                                        </div>

                                         <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="E-mail" required>
                                        </div>

                                        <div class="form-group">
                                            <textarea name="message" class="form-control" placeholder="Message" required></textarea>
                                        </div>

                                        <div class="form-group alerts">
                        
                                            <div class="alert alert-success" role="alert">
                                              
                                            </div>

                                            <div class="alert alert-danger" role="alert">
                                              
                                            </div>
                                            
                                        </div>

                                         <div class="form-group">
                                            <button type="submit" class="btn btn-submit pull-right">Send message</button>
                                        </div>
                                        
                                    </form>

                                </div>

                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div class="clearfix"></div>
            </div>
        </div>

        <div class="footer-bottom">

            <div class="container text-right">
                Sadaka @ copyrights 2015 - by <a href="http://www.ouarmedia.com" target="_blank">Ouarmedia</a>
            </div>
        </div>
        
    </footer> <!-- main-footer -->

    <!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="assets/js/jquery-1.11.1.min.js"><\/script>')</script>

    <!-- Bootsrap javascript file -->
    <script src="../MasterPage/sadaka/HTML/assets/js/bootstrap.min.js"></script>
    
    <!-- owl carouseljavascript file -->
    <script src="../MasterPage/sadaka/HTML/assets/js/owl.carousel.min.js"></script>
    <script src="../MasterPage/sadaka/HTML/assets/css/jquery.sidr.dark.css""></script>
    <!-- Template main javascript -->
    <script src="../MasterPage/sadaka/HTML/assets/js/main.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function (b, o, i, l, e, r) {
            b.GoogleAnalyticsObject = l; b[l] || (b[l] =
            function () { (b[l].q = b[l].q || []).push(arguments) }); b[l].l = +new Date;
            e = o.createElement(i); r = o.getElementsByTagName(i)[0];
            e.src = '//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e, r)
        }(window, document, 'script', 'ga'));
        ga('create', 'UA-XXXXX-X'); ga('send', 'pageview');
    </script>
</asp:Content>
