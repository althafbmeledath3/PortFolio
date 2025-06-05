import HeroImg from "@/assets/images/Hero.jpg";



export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Builder, Problem Solver, Tech Explorer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
              Hey there! I'm Althaf B Meledath — a code artist 🎨 crafting digital experiences with JavaScript. I blend creativity with logic to build responsive, interactive, and meaningful web applications using the MERN stack. From ideas to interfaces, I bring visions to life — one line of code at a time 💻✨{" "}
              </p>
              <p className="text-white">
              I specialize in the MERN stack, love clean design, and focus on crafting full-fledged products — from frontend interfaces to backend APIs.
My mission is simple: to build innovative platforms, tools, and digital experiences that make an impact and solve real-world problems. 💡💻🚀              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  Driven by code. Inspired by creativity. Focused on making the web a better place. 🌐
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Althaf B Meledath
                    </cite>
                    
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


