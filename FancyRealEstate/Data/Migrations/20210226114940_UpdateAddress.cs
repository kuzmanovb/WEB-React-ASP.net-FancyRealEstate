using Microsoft.EntityFrameworkCore.Migrations;

namespace FancyRealEstate.Data.Migrations
{
    public partial class UpdateAddress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_RealEstateProperties_AddressId",
                table: "RealEstateProperties");

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateProperties_AddressId",
                table: "RealEstateProperties",
                column: "AddressId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_RealEstateProperties_AddressId",
                table: "RealEstateProperties");

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateProperties_AddressId",
                table: "RealEstateProperties",
                column: "AddressId");
        }
    }
}
