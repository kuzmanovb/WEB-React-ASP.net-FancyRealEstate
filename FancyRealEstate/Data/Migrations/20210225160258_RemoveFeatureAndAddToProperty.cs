using Microsoft.EntityFrameworkCore.Migrations;

namespace FancyRealEstate.Data.Migrations
{
    public partial class RemoveFeatureAndAddToProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RealEstateProperties_Features_FeatureId",
                table: "RealEstateProperties");

            migrationBuilder.DropTable(
                name: "Features");

            migrationBuilder.DropIndex(
                name: "IX_RealEstateProperties_FeatureId",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "FeatureId",
                table: "RealEstateProperties");

            migrationBuilder.AddColumn<bool>(
                name: "AirCondition",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Elevator",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Garage",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Heating",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Internet",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Renovated",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "SecuritySistem",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AirCondition",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "Elevator",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "Garage",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "Heating",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "Internet",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "Renovated",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "SecuritySistem",
                table: "RealEstateProperties");

            migrationBuilder.AddColumn<int>(
                name: "FeatureId",
                table: "RealEstateProperties",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Features",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AirCondition = table.Column<bool>(type: "bit", nullable: false),
                    Elevator = table.Column<bool>(type: "bit", nullable: false),
                    Garage = table.Column<bool>(type: "bit", nullable: false),
                    Heating = table.Column<bool>(type: "bit", nullable: false),
                    Internet = table.Column<bool>(type: "bit", nullable: false),
                    Renovated = table.Column<bool>(type: "bit", nullable: false),
                    SecuritySistem = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Features", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateProperties_FeatureId",
                table: "RealEstateProperties",
                column: "FeatureId");

            migrationBuilder.AddForeignKey(
                name: "FK_RealEstateProperties_Features_FeatureId",
                table: "RealEstateProperties",
                column: "FeatureId",
                principalTable: "Features",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
