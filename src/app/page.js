import Image from "next/image";
import Me from "./me/page";
import TopBlogs from "./homePage/topBlog";
import Newsletter from "./homePage/comp/newsletter";

export default function Home() {
  return (
    <div className="">
      <Me />
      <Newsletter />
      <TopBlogs />
      
    </div>
  );
}
