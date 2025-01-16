"use client";
import { useEffect, useState } from "react";

import Experiences from "@/app/components/Experiences";
import Profile from "@/app/components/Profile";
import Skills from "@/app/components/Skills";

const StickySection = () => {
  return (
    <div>
      <div className="sticky top-0">
        <Profile />
        <Skills />
        <Experiences />
      </div>
    </div>
  );
};
export default StickySection;
