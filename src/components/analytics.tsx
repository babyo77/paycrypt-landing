"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
export default function Analytics() {
  useEffect(() => {
    Clarity.init("regacaq9x8");
  }, []);

  return null;
}
