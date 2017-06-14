<%@ Page Title="" Language="C#" MasterPageFile="~/Master/Master.Master" AutoEventWireup="true" CodeBehind="RegistrarAlumno.aspx.cs" Inherits="SICOES.Formularios.RegistrarAlumno" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
 
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
       
        <%-- Datos de los padres --%>
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Nombre del Aspirante</h3>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <asp:CheckBox ID="chknuevo" runat="server" Text="Nuevo" />
            &nbsp;&nbsp;&nbsp;
                <asp:CheckBox ID="chkrevalida" runat="server" Text="Revalida" />
            </div>
            <!-- /.box-header -->
            <!-- form start -->

                        <div class="box-body">
                            <div class="form-group">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="email">Apellido Paterno:</label>
                                                <asp:TextBox ID="txtApellidoPaterno" CssClass="form-control" placeholder="M-72" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                        <div class=" col-md-3">
                                            <div class="form-group">
                                                <label for="email">Apellido Materno:</label>
                                                <asp:TextBox ID="txtapllidomaterno" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                          <div class=" col-md-3">
                                            <div class="form-group">
                                                <label for="email">Nombre(s):</label>
                                                <asp:TextBox ID="txtnombres" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                     <div class=" col-md-3">
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
                  <img id="imagend" alt="" width="100" height="100" src="" />
                <asp:Label ID="lblid" runat="server" Visible="False"></asp:Label>
               </div>
       <div class="row"><asp:Image ID="Image1" runat="server" Width="100" Height="100" /> 

                                        </div>
                               </div>
  </div>  
              </div>
            </>
          </div>
        </div>
        <!-- left column -->
      </div>
          <asp:UpdatePanel ID="UpdatePanel2" runat="server">
       <ContentTemplate>
        <%-- Datos Generales --%>          
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-danger">
            <div class="box-header with-border">
              <h3 class="box-title">Datos Generales</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->

                        <div class="box-body">
                            <div class="form-group">
                                        <div class="col-md-6">
                                          
  <div class="form-group">
                <label>Fecha de Nacimiento:</label>

                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" runat="server" id="txtfechanacimiento" class="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask>
                </div>
                <!-- /.input group -->
              </div>
                                        </div>
                                        <div class=" col-md-6">
                                            <div class="form-group">
                                                <label for="email">CURP:</label>
                                                <asp:TextBox ID="txtcurp" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>                             
  </div> 
              </div>
            </>
          </div>
        </div> 
      </div>
        <%-- Domicilio --%>
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title">Domicilio</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
                        <div class="box-body">
                            <div class="form-group">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="email">Calle:</label>
                                                <asp:TextBox ID="txtcalle" CssClass="form-control" placeholder="M-72" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                        <div class=" col-md-3">
                                            <div class="form-group">
                                                <label for="email">Número:</label>
                                                <asp:TextBox ID="txtnumero" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                          <div class=" col-md-3">
                                            <div class="form-group">
                                                <label for="email">Colonia:</label>
                                                <asp:TextBox ID="txtcolonia" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>    
                                     <div class=" col-md-3">
                                            <div class="form-group">
                                                <label for="email">Codigo Postal:</label>
                                                <asp:TextBox ID="txtcodigopostal" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>  
                                <div class="col-md-12">
                                   <div class=" col-md-3">
                                            <div class="form-group">
                                                <label for="email">Teléfono:</label>
                                                <asp:TextBox ID="txttelefonocasa" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                          <div class=" col-md-3">  
                                            <div class="form-group">
                                                <label for="email">Estado:</label>
                                                <asp:DropDownList ID="DPestado" CssClass="form-control" runat="server" DataTextField="Nombre" DataValueField="Nombre" OnLoad="DPestado_Load" OnPreRender="DPestado_PreRender">
                                                    <asp:ListItem>Seleccione</asp:ListItem>
                                                </asp:DropDownList>
                                                <%-- modal --%>
  <script type="text/javascript">
function mostrarVentana()
{
    var ventana = document.getElementById('miVentana'); // Accedemos al contenedor
    ventana.style.marginTop = "100px"; // Definimos su posición vertical. La ponemos fija para simplificar el código
    ventana.style.marginLeft = ((document.body.clientWidth-350) / 2) +  "px"; // Definimos su posición horizontal
    ventana.style.display = 'block'; // Y lo hacemos visible
}

function ocultarVentana()
{
    var ventana = document.getElementById('miVentana'); // Accedemos al contenedor
    ventana.style.display = 'none'; // Y lo hacemos invisible
}
</script>
    Registrar Nuevo Estado <a href="javascript:mostrarVentana();">aquí</a>
<div id="miVentana" style="position: fixed; width: 300px; height: 250px; top: 0; left: 0; font-family:Verdana, Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; border: #333333 3px solid; background-color: #FAFAFA; color: #000000; display:none;">
 <div style="font-weight: bold; text-align: left; color: #FFFFFF; padding: 5px; background-color:#006394">Registrar Nuevo Estado</div>
     <label for="email">Ingresa el Nuevo Estado:</label>
    <asp:TextBox ID="txtnuevoEstado" placeholder="Tabasco" CssClass="form-control" runat="server"></asp:TextBox>
    <asp:Button ID="btnregistroEstado" runat="server" Text="Registrar" OnClick="btnregistroEstado_Click" />
    <input id="btnAceptar" onclick="ocultarVentana();" name="btnAceptar" size="20" type="button" value="Cerrar" />
    <asp:GridView Width="60" Height="60" ID="gridmodal" runat="server">
        <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
    </asp:GridView>
</div>   
                                                <%-- Fin del Modal --%>
                                            </div>

                                        </div>    
                                     <div class=" col-md-3">
                                            <div class="form-group">
                                                <label for="email">Municipio:</label>
                                                <asp:DropDownList ID="dpmunicipio" CssClass="form-control" runat="server" OnPreRender="dpmunicipio_PreRender">
                                                    <asp:ListItem>Seleccione</asp:ListItem>
                                                      </asp:DropDownList>
                                                 <script type="text/javascript">
function mostrarVentana2()
{
    var ventana = document.getElementById('miVentana2'); // Accedemos al contenedor
    ventana.style.marginTop = "100px"; // Definimos su posición vertical. La ponemos fija para simplificar el código
    ventana.style.marginLeft = ((document.body.clientWidth-350) / 2) +  "px"; // Definimos su posición horizontal
    ventana.style.display = 'block'; // Y lo hacemos visible
}

function ocultarVentana2()
{
    var ventana = document.getElementById('miVentana2'); // Accedemos al contenedor
    ventana.style.display = 'none'; // Y lo hacemos invisible
}
</script>
    Registrar Nuevo Municipio <a href="javascript:mostrarVentana2();">aquí</a>
<div id="miVentana2" style="position: fixed; width: 300px; height: 250px; top: 0; left: 0; font-family:Verdana, Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; border: #333333 3px solid; background-color: #FAFAFA; color: #000000; display:none;">
 <div style="font-weight: bold; text-align: left; color: #FFFFFF; padding: 5px; background-color:#006394">Registrar Nuevo Estado</div>
     <label for="email">Ingresa el Nuevo Municipio:</label>
    <asp:TextBox ID="txtnuevomunicioio" placeholder="Mérida" CssClass="form-control" runat="server"></asp:TextBox>
    <asp:Button ID="btnmunicipio" runat="server" Text="Registrar" OnClick="btnmunicipio_Click"  />
    <input id="btnAceptar2" onclick="ocultarVentana2();" name="btnAceptar2" size="20" type="button" value="Cerrar" />
    <asp:GridView Width="60" Height="60" ID="gridmunicipios" runat="server">
        <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
    </asp:GridView>
</div>   
                                            </div>

                                        </div>  
                                </div>                           
  </div>  
              </div>
            </>
          </div>
        </div>
           
      </div>
        <%-- Datos de los padres --%>
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Datos de los Padres</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->

                        <div class="box-body">
                            <div class="form-group">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="email">Nombre del Padre:</label>
                                                <asp:TextBox ID="txtnompadre" CssClass="form-control" placeholder="M-72" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                        <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Teléfono:</label>
                                                <asp:TextBox ID="txttelefonopadre" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                          <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Tutor:</label><br />
                                                <asp:CheckBox ID="chkpadretutor" runat="server" Text="SI" AutoPostBack="True" OnCheckedChanged="chkpadretutor_CheckedChanged" />
                                            </div>
                                              </div>  
                                <div class="col-md-12">
                                     <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="email">Nombre de la Madre:</label>
                                                <asp:TextBox ID="txtnombreMadre" CssClass="form-control" placeholder="M-72" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                        <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Teléfono:</label>
                                                <asp:TextBox ID="txttelmadre" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                          <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Tutor:</label><br />
                                                <asp:CheckBox ID="chkmadretutor" runat="server" Text="SI" AutoPostBack="True" OnCheckedChanged="chkmadretutor_CheckedChanged" />
                                            </div>
                                              </div> 
                                </div>       
                                <div class="col-md-12">
                                     <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="email">Nombre del Tutor:</label>
                                                <asp:TextBox ID="txtnomturor" CssClass="form-control" placeholder="M-72" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                        <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Teléfono:</label>
                                                <asp:TextBox ID="txttelfonoturo" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                          <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Tutor:</label><br />
                                                <asp:CheckBox ID="chktutortutoor" runat="server" Text="SI" AutoPostBack="True" />
                                            </div>
                                              </div> 
                                </div>              
  </div>  
              </div>
          </div>
        </div>
           
      </div>
        <%-- Datos de la escuela de procedencia --%>
           <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">Datos de la escuela de procedencia</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->

                        <div class="box-body">
                            <div class="form-group">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="email">Escuela de Procedencia:</label>
                                                <asp:TextBox ID="txtescuela" CssClass="form-control" placeholder="M-72" runat="server"></asp:TextBox>
                                            </div>

                                        </div>
                                        <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Clave de la escuela de Procenedncia:</label>
                                                <asp:TextBox ID="txtclave" CssClass="form-control" placeholder="2016" runat="server"></asp:TextBox>
                                            </div>

                                        </div>     
                                    <div class=" col-md-4">
                                            <div class="form-group">
                                                <label for="email">Turno:</label>
                                                <asp:DropDownList ID="dpturno" CssClass="form-control" runat="server">
                                                    <asp:ListItem>Seleccione</asp:ListItem>
                                                    <asp:ListItem>Matutino</asp:ListItem>
                                                    <asp:ListItem>Vespertirno</asp:ListItem>
                                                    <asp:ListItem>Nocturno</asp:ListItem>
                                                </asp:DropDownList>
                                            </div>

                                        </div>                          
  </div> 
              </div>
          </div>
        </div> 
      </div>
        <%-- Documentos Entregados --%>
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Documentos Entregados</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->

                        <div class="box-body">
                            <div class="form-group">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <br />
                                                 <asp:CheckBox ID="checkacta" runat="server" Text="Act. Nacimiento" /><br />
                                                  <asp:CheckBox ID="checkfotos" runat="server" Text="Fotos" /><br />
                                                  <asp:CheckBox ID="checkcurp" runat="server" Text="Curp" /><br />
                                                  <asp:CheckBox ID="checkconstancia" runat="server" Text="Constancia" /><br />
                                                </div>

                                        </div>
                                        <div class=" col-md-4">
                                            <div class="form-group"><br />
                                                 <asp:CheckBox ID="checkcomrodomicilio" runat="server" Text="Comprobante de Domicilio" /><br />
                                                  <asp:CheckBox ID="checkboleta" runat="server" Text="Boletas de Calificación" /><br />
                                                  <asp:CheckBox ID="checkcertificadoparcial" runat="server" Text="Certificado Parcial" /><br />
                                                  <asp:CheckBox ID="checkoficioreva" runat="server" Text="Oficio de Revalidación" /><br />
                                          </div>

                                        </div>     
                                    <div class=" col-md-4">
                                            <div class="form-group">
                                             <br />
                                                  <asp:CheckBox ID="checkconstanciamedia" runat="server" Text="Constancia de comp. 1/2" /><br />
                                                  <asp:CheckBox ID="checkcertificadosecundaria" runat="server" Text="Certificado Secundaria" /><br />
                                                  <label for="email">Otros:</label>
                                                <asp:TextBox ID="txtotros" CssClass=" form-control" runat="server"></asp:TextBox>
                                            </div>

                                        </div>                          
  </div> 
              </div>
          </div>
        </div> 
      </div>                  
        <%-- Terminar --%>
           </ContentTemplate>
    </asp:UpdatePanel> 
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-danger">
            <div class="box-header with-border">
              <h3 class="box-title">Terminar Registro</h3>
            </div>
                        <div class="box-body">
                            <div class="form-group">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                              </div>
                                            <asp:Button ID="btnguardar" CssClass="form-control" runat="server" Text="Guardar" OnClick="btnguardar_Click" />
                                            <asp:Button ID="Button1" CssClass="form-control" runat="server" Text="Button" OnClick="Button1_Click1" />
                                        </div>
                                        <div class=" col-md-3">
                                            <div class="form-group">
                                              </div>
                                              <asp:Button ID="btninscribir" CssClass="form-control" runat="server" Text="Inscribir" OnClick="btninscribir_Click" />
                                        </div>     
                                     <div class=" col-md-3">
                                            <div class="form-group">
                                              </div>
                                              <asp:Button ID="btnactualizar" CssClass="form-control" runat="server" Text="Actualizar" OnClick="btnactualizar_Click"  />
                                        </div> 
                                 <div class=" col-md-3">
                                            <div class="form-group">
                                              </div>
                                              <asp:Button ID="btnlimpiar" CssClass="form-control" runat="server" Text="Limpiar" OnClick="btnlimpiar_Click"  />
                                        </div> 
                         
                                <div class="col-md-12">
                                    <br />
                                    <asp:GridView ID="GridView1" CssClass="table table-hover" runat="server" AutoGenerateSelectButton="True" OnSelectedIndexChanged="GridView1_SelectedIndexChanged">
                                    <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                    </asp:GridView>
                                </div> 
                                         
  </div> 
                            </div>
                   </div>
              </div>
          </div>
            
      </section>      
        </div> 
   
 
</asp:Content>
    
