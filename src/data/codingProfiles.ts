import leetcodeLogo from "@/assets/platformLogos/leetcode.png";
import codechefLogo from "@/assets/platformLogos/codechef.png";
import type { StaticImageData } from "next/image";

export interface ICodingProfile {
  platform: string;
  description: string;
  thumbnail: StaticImageData;
  profileLink: string;
}

export const codingProfiles: Array<ICodingProfile> = [
  {
    platform: "LeetCode",
    description: "Ranked in the top 20% globally",
    thumbnail: leetcodeLogo,
    profileLink: "https://leetcode.com/conficker_404",
  },
  {
    platform: "CodeChef",
    description: "(3 Star) highest rating 1617",
    thumbnail: codechefLogo,
    profileLink: "https://www.codechef.com/users/conficker_404",
  },
];
