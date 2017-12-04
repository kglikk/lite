using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace lite.Migrations
{
    public partial class DodanyProjekt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExternalGrid",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ActivePower = table.Column<double>(type: "float", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NodeNo = table.Column<int>(type: "int", nullable: false),
                    NodeType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReactivePower = table.Column<double>(type: "float", nullable: true),
                    VoltageAngle = table.Column<double>(type: "float", nullable: true),
                    VoltageSetpoint = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExternalGrid", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "OverheadLine",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EndNodeNo = table.Column<int>(type: "int", nullable: false),
                    Length = table.Column<double>(type: "float", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartNodeNo = table.Column<int>(type: "int", nullable: false),
                    UnitaryCapacitance = table.Column<double>(type: "float", nullable: false),
                    UnitaryReactance = table.Column<double>(type: "float", nullable: false),
                    UnitaryResistance = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OverheadLine", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Project",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "TwoPhaseTransformer",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ApparentPowerRated = table.Column<double>(type: "float", nullable: false),
                    HVNodeNo = table.Column<int>(type: "int", nullable: false),
                    HVVoltageRated = table.Column<double>(type: "float", nullable: false),
                    LVNodeNo = table.Column<int>(type: "int", nullable: false),
                    LVVoltageRated = table.Column<double>(type: "float", nullable: false),
                    LoadLossesRated = table.Column<double>(type: "float", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ShortCircuitVoltage = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TwoPhaseTransformer", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExternalGrid");

            migrationBuilder.DropTable(
                name: "OverheadLine");

            migrationBuilder.DropTable(
                name: "Project");

            migrationBuilder.DropTable(
                name: "TwoPhaseTransformer");
        }
    }
}
