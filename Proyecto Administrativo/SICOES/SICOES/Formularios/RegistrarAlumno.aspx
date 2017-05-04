<%@ Page Title="" Language="C#" MasterPageFile="~/Master/Master.Master" AutoEventWireup="true" CodeBehind="RegistrarAlumno.aspx.cs" Inherits="SICOES.Formularios.RegistrarAlumno" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="../CSS/jquery-2.2.3.min.js"></script>
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
   
     <div class="content-wrapper" runat="server">  
          
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
       Registrar Alumno
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class=" fa fa-desktop"></i> Sicoes</a></li>
        <li><a href="#"><i class=" icon-user"></i> Registrar Alumno</a></li>
        <li class="active"></li>
      </ol>
    </section> 
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Datos Del Alumno</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            
              <div class="box-body">
                <div class="form-group">
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
       <ContentTemplate>
           
    <div class="col-md-6">
        <div class="form-group">
      <label for="email">Matricula:</label>
                     <asp:TextBox ID="txtmatriculaalumno" CssClass="form-control" placeholder="M-72" runat="server"></asp:TextBox>
    </div>
<div class="form-group">
    
      <label for="email">Nombre:</label>
                     <asp:TextBox ID="txtmatricula" CssClass="form-control" placeholder="15FB8" runat="server"></asp:TextBox>
    </div>
    <div class="form-group">
      <label for="pwd">Apellidos:</label>
     <asp:TextBox ID="txtmodelodecarro" CssClass="form-control" placeholder="Nissan" runat="server"></asp:TextBox>
    </div>
           <div class="form-group">
      <label for="email">Telefono:</label>
     <asp:TextBox ID="txtcolor" CssClass="form-control" placeholder="Rojo" runat="server"></asp:TextBox>
    </div>
           <div class="form-group">
      <label for="email">Celular:</label>
               <asp:TextBox ID="txtaño" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
               </div>
         <div class="form-group">
      <label for="email">Estado:</label>
               <asp:TextBox ID="txtestado" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
               </div>
       

          </div>
    <div class=" col-md-6">
       <div class="form-group">
      <label for="email">Municipio:</label>
               <asp:TextBox ID="txtmunicipio" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
               </div>
         <div class="form-group">
      <label for="email">Direccion:</label>
               <asp:TextBox ID="txtdireccion" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
               </div>
         <div class="form-group">
      <label for="email">Correo:</label>
               <asp:TextBox ID="txtcorreo" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
               </div>
      <asp:FileUpload ID="FileUpload1"  runat="server" accept=" image/jpeg, image/png" onchange="showimagepreview(this)"/>
                   <script type="text/javascript">  
  
                function showimagepreview(input) {  
  
                    if (input.files && input.files[0]) {  
                        var reader = new FileReader();  
                        reader.onload = function (e) {  
  
                            $('#imagend').attr('src', e.target.result);
                                document.getElementsById("imagend")[0].setAttribute("src", e.target.result);
                        }  
                        reader.readAsDataURL(input.files[0]);  
                    }  
                }  
  
                </script> 
        <div class="col-md-12">
            <div class="col-md-2">

        </div>
            <div class="col-md-6">
 <img id="imagend" alt="" width="250" height="150" src="" />
        </div>
  <div class="col-md-4">

        </div>
        </div>
                 
    </div>
    <div class="col-md-12">
     
        <div class="col-md-6">
            
        </div>
          <div class="col-md-3">
            <asp:Button ID="Button2" CssClass="form-control" runat="server" Text="Agregar" OnClick="Button1_Click"  Font-Bold="True" />
            <br />
        </div>
         <div class="col-md-3">
            <asp:Button ID="Button1" CssClass="form-control" runat="server" Text="Eliminar" OnClick="Button1_Click"  Font-Bold="True" />
            <br />
        </div> 
       
    </div>
              <div class="col-md-12">
               <%--    <asp:GridView ID="GridView1" CssClass="table table-hover" runat="server" AutoGenerateSelectButton="True" OnSelectedIndexChanged="GridView1_SelectedIndexChanged1">
                 <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
            </asp:GridView>--%>
              </div>
       </ContentTemplate>

    </asp:UpdatePanel>
  </div>  
              </div>
            </>
          </div>
        </div>
           
      </div>
    </section>
  </div>
</asp:Content>
    
