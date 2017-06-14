<%@ Page Title="" Language="C#" MasterPageFile="~/Master/Master.Master" AutoEventWireup="true" CodeBehind="RegistroMaestroos.aspx.cs" Inherits="SICOES.Formularios.RegistroMaestroos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <%-- Camara --%>
   <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src='<%=ResolveUrl("~/Webcam_Plugin/jquery.webcam.js") %>' type="text/javascript"></script>
<script type="text/javascript">
var pageUrl = '<%=ResolveUrl("~/Formularios/RegistroMaestroos.aspx") %>';
$(function () {
    jQuery("#webcam").webcam({
        width: 320,
        height: 240,
        mode: "save",
        swffile: '<%=ResolveUrl("~/Webcam_Plugin/jscam.swf") %>',
        debug: function (type, status) {
            $('#camStatus').append(type + ": " + status + '<br /><br />');
        },
        onSave: function (data) {
            $.ajax({
                type: "POST",
                url: pageUrl + "/GetCapturedImage",
                data: '',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (r) {
                    $("[id*=imgCapture]").css("visibility", "visible");
                    $("[id*=imgCapture]").attr("src", r.d);
                },
                failure: function (response) {
                    alert(response.d);
                }
            });
        },
        onCapture: function () {
            webcam.save(pageUrl);
        }
    });
});
function Capture() {
    webcam.capture();
    return false;
}
</script>
    <%-- fin camara --%>
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
           <div class="form-group">
      <label for="pwd">Correo:</label>
     <asp:TextBox ID="txtcorreo" CssClass="form-control" placeholder="Ejemplo@hotmail.com" runat="server"></asp:TextBox>
    </div>
           <div class="form-group">
      <label for="pwd">Cedula:</label>
     <asp:TextBox ID="txtcedula" CssClass="form-control" placeholder="012428624" runat="server"></asp:TextBox>
    </div>
         </div>
         
       </ContentTemplate>
    </asp:UpdatePanel>
    <div class=" col-md-6">
         
      
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
                  <img id="imagend1" alt="" width="60" runat="server" height="60" src="" />
               <img id="imagend" alt="" width="70" height="70" src="" />
                <asp:Image ID="Image1" runat="server" Width="70" Height="70" /> 
                <asp:Label ID="lblid" runat="server" Visible="False"></asp:Label>
               </div>
                    <%-- codigo camara --%>
                   
                          <div class="form-group">
                            
      <Label for="fornombre" class="col-sm-3 control-label">Tomar Foto: </Label>
                              <asp:Button ID="btnCapture" Text="Capture" runat="server" OnClientClick="return Capture();"  />
                              <table border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center">
            <u>Live Camera</u>
        </td>
        <td>
        </td>
    </tr>
    <tr>
        <td>
            <div id="webcam">
            </div>
        </td>
        <td>
            &nbsp;
        </td>
        <td>
            <asp:Image ID="imgCapture" runat="server" Style="visibility: hidden; width: 100px;
                height: 100px" />
        </td>
    </tr>
</table>
                              </div>
                         
                    <%-- fin de codigo camara --%>
       <div class="row">
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
