<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="SICOES.Formularios.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>

  <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900'/>
<link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Montserrat:400,700'/>
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'/>
    <link href="Login/css/style.css" rel="stylesheet" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        
<div class="container">
  <div class="info">
    <h1>Bienvenido a SICOES</h1><span> <i class="fa fa-desktop"></i>  <a href="http://andytran.me"></a></span>
  </div>
</div>
<div class="form">
      <img src="../Imagenes/logitopo.png" width="200" height="200" /><br />
      <br />
&nbsp;<asp:TextBox ID="txtusuario" runat="server" placeholder="Usuario" ></asp:TextBox>
      <asp:TextBox ID="txtcontraseña" runat="server" placeholder="Contraseña" TextMode="Password" ></asp:TextBox>
    <asp:Button ID="btningresar" runat="server" Text="Iniciar" BackColor="#115C9B" ForeColor="White" OnClick="btningresar_Click" />
    <p class="message">Ya estas registrado? <a href="#">Inicia Sesión</a></p>
 
</div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="Login/js/index.js"></script>
    </form>
</body>
</html>
