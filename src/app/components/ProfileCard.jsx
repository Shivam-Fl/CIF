export default function ProfileCard({ data }) {
  if (!data) return null;

  // Format the category name for display
  const formatCategory = (category) => {
    if (!category) return '';
    
    // Convert camelCase to separate words and capitalize first letter
    return category
      .replace(/([A-Z])/g, ' $1') // Insert a space before all uppercase letters
      .replace(/^./, str => str.toUpperCase()); // Capitalize the first letter
  };

  // Get background color based on category
  const getCategoryBgColor = (category) => {
    switch (category) {
      case 'tutoring':
        return 'bg-[#E9ECFF]';
      case 'childcare':
        return 'bg-[#E7F2FF]';
      case 'mentalphysical':
        return 'bg-[#E7F2FF]';
      case 'mealservice':
        return 'bg-[#EFFFDF]';
      default:
        return 'bg-[#E9ECFF]';
    }
  };

  // Get additional highlights based on category
  const getHighlights = () => {
    const highlights = [];
    
    if (data.category === 'tutoring') {
      if (data.mode) highlights.push(data.mode);
      if (data.experience) highlights.push(`${data.experience} Experience`);
    } else if (data.category === 'childcare') {
      if (data.ageBand) highlights.push(data.ageBand);
      if (data.jobTiming) highlights.push(data.jobTiming);
      if (data.overnightCare) highlights.push('Overnight Care');
    } else if (data.category === 'mealservice') {
      if (data.serviceType) highlights.push(data.serviceType);
      if (data.mealTypes && data.mealTypes.length) highlights.push(data.mealTypes[0]);
      if (data.offerSubscription) highlights.push('Subscription Available');
    }
    
    return highlights;
  };

  const highlights = getHighlights();
  const displayRating = data.ratings || 4.5; // Default to 4.5 if no rating

  return (
    <div className="bg-white rounded-lg w-full flex flex-col md:flex-row gap-4">
      <div className="md:w-[40%] h-[225px]">
        <img
          src={data.profilePic || "/placeholder.jpg"}
          alt={data.username || "Profile"}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-full flex flex-col gap-[14px]">
        <div className="flex flex-col md:flex-row gap-2 justify-between items-start">
          <div className="flex flex-col gap-1">
            <h1 className="text-[17px] text-[#101828] font-[600]">
              {data.username || "Care Provider"}
            </h1>
            <div className="flex items-center gap-[5px]">
              <img src="/Icons/location.svg" alt="" className="h-[20px]" />
              <span className="text-[15px] font-[400]">
                {data.location || "Location not specified"}
                {data.zipCode && ` - ${data.zipCode}`}
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-[1px] md:mt-0">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <img
                    src={item <= displayRating ? "/Icons/star.svg" : "/Icons/star_empty.svg"}
                    alt=""
                    className="h-[20px]"
                    key={item}
                  />
                );
              })}
            </div>
            <span className="text-[#475467] text-[13px]">({Math.floor(Math.random() * 100) + 10} reviews)</span>
          </div>
        </div>
        <div className="text-[13px] text-[#475467]">
          {data.about ? data.about.substring(0, 150) + (data.about.length > 150 ? '...' : '') : 'No description available'}
        </div>
        <div>
          <h1 className="text-[15px] text-[#101828] font-[600]">
            Highlights
          </h1>
          <div className="flex flex-wrap gap-[13px] mt-2">
            <button className={`text-[13px] text-[#101828] px-[13px] py-[5px] rounded-md font-[500] ${getCategoryBgColor(data.category)}`}>
              {formatCategory(data.category)}
            </button>
            
            {highlights.map((highlight, index) => (
              <button 
                key={index}
                className={`text-[13px] text-[#101828] px-[13px] py-[5px] rounded-md font-[500] ${getCategoryBgColor(data.category)}`}
              >
                {highlight}
              </button>
            ))}
            
            {data.hourlyRate && (
              <button className={`text-[13px] text-[#101828] px-[13px] py-[5px] rounded-md font-[500] ${getCategoryBgColor(data.category)}`}>
                ${data.hourlyRate}/hr
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
