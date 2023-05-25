import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = ({params}) => {
  return <div>tags {params.slug}</div>;
};

export default page;
