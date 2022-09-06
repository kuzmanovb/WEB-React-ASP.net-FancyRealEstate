using Microsoft.EntityFrameworkCore.Migrations;

namespace FancyRealEstate.Data.Migrations
{
    public partial class RealEstatePropertyFeature : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FeatureRealEstateProperty",
                columns: table => new
                {
                    FeaturesId = table.Column<int>(type: "int", nullable: false),
                    RealEstatePropertiesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeatureRealEstateProperty", x => new { x.FeaturesId, x.RealEstatePropertiesId });
                    table.ForeignKey(
                        name: "FK_FeatureRealEstateProperty_Features_FeaturesId",
                        column: x => x.FeaturesId,
                        principalTable: "Features",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FeatureRealEstateProperty_RealEstateProperties_RealEstatePropertiesId",
                        column: x => x.RealEstatePropertiesId,
                        principalTable: "RealEstateProperties",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FeatureRealEstateProperty_RealEstatePropertiesId",
                table: "FeatureRealEstateProperty",
                column: "RealEstatePropertiesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FeatureRealEstateProperty");
        }
    }
}
