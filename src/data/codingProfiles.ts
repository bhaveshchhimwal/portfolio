import leetcodeLogo from "@/assets/platformLogos/leetcode.png";
import codechefLogo from "@/assets/platformLogos/codechef.png";
import codeforcesLogo from "@/assets/platformLogos/codeforces.png"; // ✅ make sure this image exists

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
    description: "Beginner on LeetCode",
    thumbnail: leetcodeLogo,
    profileLink: "https://leetcode.com/conficker_404",
  },
  {
    platform: "CodeChef",
    description: "(2 Star) highest rating 1460",
    thumbnail: codechefLogo,
    profileLink: "https://www.codechef.com/users/conficker_404",
  },
  {
    platform: "CodeForces",
    description: "Newbie highest rating 1069",
    thumbnail: codeforcesLogo,
    profileLink: "https://codeforces.com/profile/conficker_404",
  },
];
