<%@ Page Title="" Language="C#" MasterPageFile="~/Master/Master.Master" AutoEventWireup="true" CodeBehind="GenerarCiclo.aspx.cs" Inherits="SICOES.Formularios.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
     <div class="content-wrapper" runat="server">  
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Generar Ciclo Escolar
        <small></small>
      </h1> 
      <ol class="breadcrumb">
        <li><a href="#"><i class=" fa fa-desktop"></i> Sicoes</a></li>
        <li><a href="#"><i class=" icon-calendar"></i> Generar Ciclo Escolar</a></li>

        <li class="active"></li>
      </ol>
    </section> 
    <!-- Main content -->
    <section class="content">
       
        <%-- Botones --%>
      <div class="row">
        <!-- /.col (left) -->
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">Determina El inicio y el Final del Ciclo</h3>
            </div>
            <div class="box-body">
                 <div class="form-group">
           <label for="email">Nombre del Ciclo:</label>
            <asp:TextBox ID="txtnombreCiclo" CssClass="form-control" placeholder="Ciclo 2016-2017" runat="server"></asp:TextBox>
                   </div>
              <!-- Rango del ciclo -->
                <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="form-group">
                <label>Inicio del ciclo:</label>
 <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" runat="server" id="txtinicio" class="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask>
                </div>
                <!-- /.input group -->
              </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                <label>Fin del ciclo:</label>
 <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" runat="server" id="txtfin" class="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask>
                </div>
                <!-- /.input group -->
              </div>
                    </div>
                </div>

                <div class=" col-md-12">
                    <div class="col-md-4"> 
                        <asp:Button ID="btnAgregar" runat="server" CssClass="form-control" Text="Generar" OnClick="btnAgregar_Click" /></div>
                        <div class="col-md-4">
                            <asp:Button ID="btnActualizar" runat="server" CssClass="form-control" Text="Button" /></div>
                        <div class="col-md-4">
                            <asp:Button ID="btneliminar" runat="server" CssClass="form-control" Text="Button" /></div>
                </div>
                <div class="col-md-12">
                    <asp:Label ID="lblid" runat="server" Visible="False"></asp:Label>
                    <br />
                    <asp:GridView ID="GridView1"  CssClass="table table-hover" runat="server" AutoGenerateSelectButton="True" OnSelectedIndexChanged="GridView1_SelectedIndexChanged">
                         <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                    </asp:GridView>
                </div>
            </div>
          </div>
        </div>
      </div> 
           <div id="ventanaperido" runat="server" class="row">
        <div class="col-md-6">
          <div class="box box-danger">
            <div class="box-header">
              <h3 class="box-title">Periodo A</h3>
            </div>
            <div class="box-body">
              <!-- Date dd/mm/yyyy -->
              <div class="form-group">
               <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="form-group">
                <label>Inicio del Periodo:</label>
 <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" runat="server" id="txtperidoAInicio" class="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask>
                </div>
                <!-- /.input group -->
              </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                <label>Fin del ciclo:</label>
 <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" runat="server" id="txtperidoAfin" class="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask>
                </div>
                <!-- /.input group -->
              </div>
                    </div>
                </div>
              </div>
                 <div class=" form-group">
                    <div class=" col-md-12">
                        <asp:Button ID="btnPeridoA" runat="server" Text="Generar" OnClick="btnPeridoA_Click" />
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">Periodo B</h3>
            </div>
            <div class="box-body">
                <div class="form-group">
               <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="form-group">
                <label>Inicio del Periodo:</label>
 <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" runat="server" id="txtinicioperiodoB" class="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask>
                </div>
                <!-- /.input group -->
              </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                <label>Fin del ciclo:</label>
 <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" runat="server" id="txtfinperiodoB" class="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask>
                </div>
                <!-- /.input group -->
              </div>
                    </div>
                </div>
              </div>
                <div class=" form-group">
                    <div class=" col-md-12">
                        <asp:Button ID="btnAgrgar" runat="server" Text="Generar" OnClick="btnAgrgar_Click" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      </section>      
        </div> 
  
</asp:Content>
