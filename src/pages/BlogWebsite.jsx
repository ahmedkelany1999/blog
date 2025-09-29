import { Link } from "react-router-dom";

const BlogWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-block rounded-md bg-white p-3 shadow hover:bg-gray-50 transition"
            aria-label="Back to home"
          >
            ← Back
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            TECHNOLOGY
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h1>

          <div className="flex items-center text-gray-500 text-sm space-x-4">
            <div className="flex items-center space-x-2">
              <span>Audrey Wilson</span>
            </div>
            <span>August 30, 2022</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src="https://pbs.twimg.com/media/FDXEULLXoAEcmsj?format=jpg&name=small"
            alt="Technology illustration"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Traveling is an enriching experience that opens up new horizons, exposes us to different
            cultures, and creates memories that last a lifetime. However, traveling can also be
            stressful and overwhelming, especially if you don't plan and prepare adequately. In this
            blog article, we'll explore tips and tricks for a memorable journey and how to make the
            most of your travels.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            One of the most rewarding aspects of traveling is immersing yourself in the local culture
            and customs. This includes trying local cuisine, attending cultural events and festivals,
            and interacting with locals. Learning a few phrases in the local language can also go a
            long way in making connections and showing respect.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Research Your Destination</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Before embarking on your journey, take the time to research your destination. This
            includes understanding the local culture, customs, and laws, as well as identifying top
            attractions, restaurants, and accommodations. Doing so will help you navigate your
            destination with confidence and avoid any cultural faux pas.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Plan Your Itinerary</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While it's essential to leave room for spontaneity and unexpected adventures, having a
            rough itinerary can help you make the most of your time and budget. Identify the must-
            see attractions and experiences, and plan your days accordingly, keeping in mind your
            preferences. This will help you avoid overwhelming and ensure that you have time to
            relax and enjoy your journey.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Vitae sapien pellentesque habitant morbi tristique. Lectus vestibulum lectus magna
            fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales
            neque sodales ut etiam sit amet.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 my-8 bg-gray-50 py-4 rounded-r-lg">
            <p className="text-lg italic text-gray-700 mb-0">
              "Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and healthy."
            </p>
          </blockquote>

          {/* Second Image */}
          <div className="my-8">
            <img
              src="https://pbs.twimg.com/media/FVSJWXDWIAIxzuH?format=jpg&name=small"
              alt="Traveler with luggage"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Advertisement Banner */}
          <div className="bg-gray-100 p-8 rounded-lg text-center my-8 border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-sm mb-2">Advertisement</p>
            <p className="text-lg font-semibold text-gray-700">You can place ads</p>
            <p className="text-sm text-gray-500">750x200</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Pack Lightly and Smartly</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Packing can be a daunting task, but with some careful planning and smart choices, you
            can pack light and efficiently. Start by making a packing list and sticking to it, focusing on
            versatile and comfortable clothing that can be mixed and matched. Invest in quality
            luggage and packing organizers to maximize space and minimize wrinkles.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Stay Safe and Healthy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Traveling can expose you to new environments and potential health risks, so it's crucial to
            take precautions to stay safe and healthy. This includes researching any required
            vaccinations or medications, staying hydrated, washing your hands frequently, and using
            sunscreen and insect repellent. It's also essential to keep your valuables safe and secure
            and to be aware of your surroundings at all times.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Immerse Yourself in the Local Culture</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            One of the most rewarding aspects of traveling is immersing yourself in the local culture
            and customs. This includes trying local cuisine, attending cultural events and festivals,
            and interacting with locals. Learning a few phrases in the local language can also go a
            long way in making connections and showing respect.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Capture Memories</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Finally, don't forget to capture memories of your journey. Whether it's through
            photography, journaling, or souvenirs, preserving the moments and experiences of your
            travels can bring joy and nostalgia for years to come. However, it's also essential to be
            present in the moment and not let technology distract you from the beauty of your
            surroundings.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Conclusion:</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Traveling is an art form that requires a blend of planning, preparation, and spontaneity.
            By following these tips and tricks, you can make the most of your journey and create
            memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the
            ride.
          </p>
        </article>
      </main>
    </div>
  );
};

export default BlogWebsite;
