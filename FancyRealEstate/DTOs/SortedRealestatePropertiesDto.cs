namespace FancyRealEstate.DTOs
{
    public class SortedRealestatePropertiesDto
    {
        public string UserId { get; set; }

        public int Page { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsPromotion { get; set; }

        public string Deal { get; set; }

        public string City { get; set; }

        public string District { get; set; }

        public string PropertyType { get; set; }

        public int MinPrice { get; set; }

        public int MaxPrice { get; set; }

        public string SortByDate { get; set; }

        public string SortByPrice { get; set; }

    }
}
