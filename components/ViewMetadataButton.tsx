"use client";
import { Button } from "antd";
import ViewMetadataButtonModal from "./ViewMetadataModal";
import { useState } from "react";

export interface ViewMetadataButtonProps {
  imageSrc: string;
}

export default function ViewMetadataButtonButton({
  imageSrc,
}: ViewMetadataButtonProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen((prev) => !prev)}>View</Button>
      <ViewMetadataButtonModal
        open={open}
        onClose={() => setOpen(false)}
        imageSrc={imageSrc}
      />
    </>
  );
}