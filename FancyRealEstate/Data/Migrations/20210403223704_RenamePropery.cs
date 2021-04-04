using Microsoft.EntityFrameworkCore.Migrations;

namespace FancyRealEstate.Data.Migrations
{
    public partial class RenamePropery : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SecuritySistem",
                table: "RealEstateProperties",
                newName: "SecuritySystem");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SecuritySystem",
                table: "RealEstateProperties",
                newName: "SecuritySistem");
        }
    }
}
