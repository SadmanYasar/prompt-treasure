// import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <div className="px-8 py-2 md:px-16 md:py-4">
      <section className="py-20">
        <div className="m-auto max-w-7xl space-y-12">
          <div className="space-y-2">
            <h4 className="text-3xl font-bold text-zinc-800 md:text-5xl">Prompt Treasure</h4>
            <p className="text-lg text-zinc-500">
              100 Prompts for Midjourney
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-300">1</div>
            <div className="bg-gray-300">2</div>
            <div className="bg-gray-300">3</div>
            <div className="bg-gray-300">4</div>
            <div className="bg-gray-300">5</div>
            <div className="bg-gray-300">6</div>
            <div className="bg-gray-300">7</div>
            <div className="bg-gray-300">8</div>
            <div className="bg-gray-300">9</div>
          </div>
        </div>
      </section>
    </div>
  )
}
