import { getList } from "@/api/api";
import AboutBlock from "@/mocules/About/AboutBlock";
import ListBlock from "@/mocules/Lists/ListBlock";
import { useEffect, useState } from "react";

export default function AboutTemplate() {

    const text = 'Welcome to the official explorer for The New york Times Best Seller list explorer.'
    const text2 = 'We hope you enjoy your stay!'

    return (
      <>
        <AboutBlock header={"About Us"} text={text} text2={text2} />
      </>
    )
  }
  