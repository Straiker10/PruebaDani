<%@ Page Title="" Language="C#" MasterPageFile="~/Master/Master.Master" AutoEventWireup="true" CodeBehind="RegistroMaestroos.aspx.cs" Inherits="SICOES.Formularios.RegistroMaestroos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
   
     <div class="content-wrapper" runat="server">  
          
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
       Registrar Maestros
        <small></small>
      </h1>
      <ol class="breadcrumb">
       <li><a href="#"><i class="fa fa-desktop "></i> SICOES</a></li>
        <li><a href="#"><i class=" icon-user-md"></i> Registrar Maestros</a></li>
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
              <h3 class="box-title">Datos Del Maestro(a)</h3>
            </div>
              <div class="box-body">
                <div class="form-group">
   <asp:UpdatePanel ID="UpdatePanel2" runat="server">
       <ContentTemplate>
           
    <div class="col-md-6">
<div class="form-group">
    
      <label for="email">Nombre:</label>
                     <asp:TextBox ID="txtnombre" CssClass="form-control" placeholder="Ezio Daniel " runat="server"></asp:TextBox>
    </div>
    <div class="form-group">
      <label for="pwd">Apellido Paterno:</label>
     <asp:TextBox ID="txtap" CssClass="form-control" placeholder="Vazquez" runat="server"></asp:TextBox>
    </div>
          <div class="form-group">
      <label for="pwd">Apellido Materno:</label>
     <asp:TextBox ID="txtam" CssClass="form-control" placeholder="Hernandez" runat="server"></asp:TextBox>
    </div>
          <div class="form-group">
      <label for="pwd">Grado Academico:</label>
     <asp:TextBox ID="txtgradoAcademico" CssClass="form-control" placeholder="Doctorado" runat="server"></asp:TextBox>
    </div>

           <div class="form-group">
      <label for="email">Teléfono:</label>
     <asp:TextBox ID="txttelefono" CssClass="form-control" placeholder="9992159077" runat="server"></asp:TextBox>
    </div>
          <div class="form-group">
      <label for="pwd">Dirección:</label>
     <asp:TextBox ID="txtdireccion" CssClass="form-control" placeholder="Calle 50 x 161 y 163 col. Plan de Ayala sur" runat="server"></asp:TextBox>
    </div>
         </div>
         
       </ContentTemplate>
    </asp:UpdatePanel>
    <div class=" col-md-6">
            <div class="form-group">
      <label for="pwd">Correo:</label>
     <asp:TextBox ID="txtcorreo" CssClass="form-control" placeholder="Ejemplo@hotmail.com" runat="server"></asp:TextBox>
    </div>
         <div class="form-group">
      <label for="pwd">Cedula:</label>
     <asp:TextBox ID="txtcedula" CssClass="form-control" placeholder="012428624" runat="server"></asp:TextBox>
    </div>
            <div class="form-group">
      <label for="email">Usuario:</label>
               <asp:TextBox ID="txtusuario" CssClass="form-control" placeholder="Julio_Escobedo" runat="server"></asp:TextBox>
               </div>
        <div class="form-group">
      <label for="email">Contraseña:</label>
               <asp:TextBox ID="txtcontraseña" CssClass="form-control" placeholder="****" runat="server" TextMode="Password"></asp:TextBox>
               </div>
          </div> 
            <div class="form-group">
      <Label for="fornombre" class="col-sm-3 control-label">Seleccionar Imagen: </Label>
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
                  <img id="imagend" alt="" width="60" height="60" src="" />
                <asp:Label ID="lblid" runat="server" Visible="False"></asp:Label>
               </div>
       <div class="row"><asp:Image ID="Image1" runat="server" Width="70" Height="70" /> 
              <div class="form-group">
      <Label for="fornombre" class="col-sm-3 control-label">Seleccionar CV: </Label>
                    <asp:FileUpload ID="filedocu"  runat="server" accept=" image/jpeg, image/png" onchange="showimagepreview(this)"/>
                  
               </div>
    </div> 
    </div>
    <div class="col-md-12">
       <div class=" col-md-3">
             <asp:Button ID="btnagregar" CssClass="form-control" runat="server" Text="Registrar" OnClick="btnagregar_Click" />
        </div>
         <div class=" col-md-3">
             <asp:Button ID="btnEliminar" CssClass="form-control" runat="server" Text="Eliminar" />
        </div>
         <div class=" col-md-3">
            <asp:Button ID="btnactualizar" CssClass="form-control" runat="server" Text="Actualizar" />
        </div>

          <div class=" col-md-3">
             <asp:Button ID="btnlimpiar" CssClass="form-control" runat="server" Text="Limpiar" OnClick="btnlimpiar_Click" />  
              <br />
              <br />
        </div>
         
    </div>
                  <br />
                    <div class="col-md-12">
                        <asp:GridView ID="GridView1" CssClass="table table-hover" runat="server" AutoGenerateSelectButton="True" OnSelectedIndexChanged="GridView1_SelectedIndexChanged">
                             <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />

                        </asp:GridView>
                    </div>
      
  </div>  
              </div>
            </>
          </div>
        </div>
           
      </div>
    </section>
  </div>
</asp:Content>
