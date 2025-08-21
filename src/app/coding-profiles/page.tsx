import CodingProfileCard from "@/components/CodingProfileCard";
import { codingProfiles } from "@/data";

const CodingProfiles = () => {
  return (
    <div className="mt-10 w-[1300px] max-w-[90%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
        {codingProfiles.map((profile, index) => (
          <CodingProfileCard
            key={index}
            platform={profile.platform}
            description={profile.description}
            thumbnail={profile.thumbnail}
            profileLink={profile.profileLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
