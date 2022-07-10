using Microsoft.EntityFrameworkCore.Migrations;

namespace FancyRealEstate.Data.Migrations
{
    public partial class EditCity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cities_Cities_CityId",
                table: "Cities");

            migrationBuilder.DropIndex(
                name: "IX_Cities_CityId",
                table: "Cities");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Cities");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "Cities",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cities_CityId",
                table: "Cities",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_Cities_CityId",
                table: "Cities",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
