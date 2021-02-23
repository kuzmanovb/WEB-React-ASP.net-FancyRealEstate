using Microsoft.EntityFrameworkCore.Migrations;

namespace FancyRealEstate.Data.Migrations
{
    public partial class AddIsPromotionToRealEstateProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RealEstateProperties_Cities_CityId",
                table: "RealEstateProperties");

            migrationBuilder.DropIndex(
                name: "IX_RealEstateProperties_CityId",
                table: "RealEstateProperties");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "RealEstateProperties");

            migrationBuilder.AddColumn<bool>(
                name: "IsPromotion",
                table: "RealEstateProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsPromotion",
                table: "RealEstateProperties");

            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "RealEstateProperties",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateProperties_CityId",
                table: "RealEstateProperties",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_RealEstateProperties_Cities_CityId",
                table: "RealEstateProperties",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
