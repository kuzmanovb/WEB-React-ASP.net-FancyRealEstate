using Microsoft.EntityFrameworkCore.Migrations;

namespace FancyRealEstate.Data.Migrations
{
    public partial class AddCloudIdToImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CloudId",
                table: "Images",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CloudId",
                table: "Images");
        }
    }
}
