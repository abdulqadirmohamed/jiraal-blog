import { supabase } from "@/components/supabase";

import Link from "next/link";

export const News = ({lessons}) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {lessons?.map((lesson) => (
        <Link key={lesson.id} href={`/${lesson.id}`}>
          <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {lesson.title}
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("blog").select("*");

  return {
    props: {
      lessons,
    },
  };
};