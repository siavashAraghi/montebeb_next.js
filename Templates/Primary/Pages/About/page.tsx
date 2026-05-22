import React from "react";

// export default Home:React.FC<{props:PageProps<'/'>}> = ({props}) => {

  /**
   * Generates About page.
   */
  export default async function About (){
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hi This Is About Page</h1>
      </main>
    </div>
  );
}