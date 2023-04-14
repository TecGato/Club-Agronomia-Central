import React from "react";
import { Navbar } from "@/components";
import Post from "./[id]/index";

export default function Posts() {
  return (
    <div>
      <Navbar />
      <div className="my-8">
        <h1 className="text-center text-3xl font-bold ">Últimas Noticias</h1>
        <Post />
        <Post />
      </div>
    </div>
  );
}
