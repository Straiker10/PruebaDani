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
         <asp:UpdatePanel ID="UpdatePanel2" runat="server">
       <ContentTemplate>
        <%-- Botones --%>
      <div class="row">
        <!-- /.col (left) -->
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">Determina El inicio y el Final del Ciclo</h3>
            </div>
            <div class="box-body">
              <!-- Date range -->
              <div class="form-group">
                <label>Ciclo:</label>

                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" class="form-control pull-right" id="reservation">
                </div>
                <!-- /.input group -->
              </div>

            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          <!-- iCheck -->
         
          <!-- /.box -->
        </div>
        <!-- /.col (right) -->
      </div>
            </ContentTemplate>
    </asp:UpdatePanel> 
           
      </section>      
        </div> 

</asp:Content>
